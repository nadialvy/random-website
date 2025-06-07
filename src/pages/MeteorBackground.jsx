import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const MeteorBackground = ({ children }) => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const materialRef = useRef(null);
  const animationIdRef = useRef(null);

  // Helper to update the dead‐zone uniform on resize
  const updateDeadZoneUniform = () => {
    if (!rendererRef.current || !materialRef.current) return;
    const cw = rendererRef.current.domElement.clientWidth;
    const ch = rendererRef.current.domElement.clientHeight;
    if (cw === 0 || ch === 0) return;
    const dzX = 40 / cw;
    const dzY = 40 / ch;
    const deadZoneNDC = Math.max(dzX, dzY, 0.001);
    materialRef.current.uniforms.uDeadZone.value = deadZoneNDC;
  };

  // Regenerate (or generate) the meteor cloud geometry + material
  const regenerateCloud = () => {
    const scene = sceneRef.current;
    const oldMesh = scene.getObjectByName("meteorPoints");
    if (oldMesh) {
      scene.remove(oldMesh);
      oldMesh.geometry.dispose();
      oldMesh.material.dispose();
    }

    const NUM_METEORS = 2600;
    const Zspawn = -1000;
    const fovRad = cameraRef.current.fov * (Math.PI / 180);
    const halfHeight = Math.tan(fovRad / 2) * Math.abs(Zspawn);
    const halfWidth = halfHeight * (window.innerWidth / window.innerHeight);
    const worldWidth = halfWidth * 2;
    const worldHeight = halfHeight * 2;
    const marginPx = 20;
    const worldMarginX = (worldWidth / window.innerWidth) * marginPx;
    const worldMarginY = (worldHeight / window.innerHeight) * marginPx;

    // Allocate buffers
    const positions = new Float32Array(NUM_METEORS * 3);
    const velocities = new Float32Array(NUM_METEORS);
    const sizes = new Float32Array(NUM_METEORS);
    const zOffsets = new Float32Array(NUM_METEORS);

    for (let i = 0; i < NUM_METEORS; i++) {
      const minX = -halfWidth + worldMarginX;
      const maxX = +halfWidth - worldMarginX;
      const minY = -halfHeight + worldMarginY;
      const maxY = +halfHeight - worldMarginY;

      const x = THREE.MathUtils.lerp(minX, maxX, Math.random());
      const y = THREE.MathUtils.lerp(minY, maxY, Math.random());
      const z = Zspawn;

      positions[3 * i + 0] = x;
      positions[3 * i + 1] = y;
      positions[3 * i + 2] = z;

      velocities[i] = 0.1 + Math.random() * 2.4;
      zOffsets[i] = Math.random() * 50;
      sizes[i] = 2 + Math.random() * 2.0;
    }

    // Build BufferGeometry
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("velocity", new THREE.BufferAttribute(velocities, 1));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute("offsetZ", new THREE.BufferAttribute(zOffsets, 1));

    // Vertex shader (unchanged logic)
    const vertexShader = `
      attribute float velocity;
      attribute float size;
      attribute float offsetZ;

      uniform float uTime;
      uniform float uStretch;
      uniform float uDeadZone;
      uniform vec2  uResolution;

      varying float vZ;
      varying float vAngle;
      varying float vDepthNorm;

      void main() {
        float initZ = position.z + 1000.0 + offsetZ;
        float traveled = initZ + velocity * uTime;
        float looped = mod(traveled, 950.0);
        float zNew = looped - 1000.0;
        vec3 pos = vec3(position.x, position.y, zNew);
        vZ = -zNew;

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        vec4 clip = projectionMatrix * mvPosition;
        vec2 ndc = clip.xy / clip.w;

        vAngle = atan(ndc.y, ndc.x);
        vDepthNorm = clamp((zNew + 1000.0) / 950.0, 0.0, 1.0);

        float baseLen = size * velocity;
        float minL = baseLen * 0.001;
        float maxL = baseLen * uStretch;
        float length = mix(minL, maxL, vDepthNorm);

        float halfPixel = length * 0.5;
        float halfSizeNDC_x = halfPixel / uResolution.x;
        float halfSizeNDC_y = halfPixel / uResolution.y;

        if (abs(ndc.x) < (uDeadZone + halfSizeNDC_x) &&
            abs(ndc.y) < (uDeadZone + halfSizeNDC_y)) {
          gl_PointSize = 0.0;
          gl_Position = clip;
          return;
        }

        gl_PointSize = length;
        gl_Position = clip;
      }
    `;

    const fragmentShader = `
      uniform float uCore;
      uniform float uFade;
      varying float vZ;
      varying float vAngle;
      varying float vDepthNorm;

      float channelFade(float rcx) {
        float coreStart = uFade;
        float coreEnd = uFade + uCore;
        float alphaCore = step(coreStart, rcx) * step(rcx, coreEnd);
        float fadeIn = smoothstep(0.0, coreStart, rcx);
        float fadeOut = 1.0 - smoothstep(coreEnd, 1.0, rcx);
        return max(alphaCore, min(fadeIn, fadeOut));
      }

      void main() {
        vec2 coord = gl_PointCoord - 0.5;
        float s = sin(vAngle);
        float c = cos(vAngle);
        vec2 r = vec2(
          coord.x * c - coord.y * s,
          coord.x * s + coord.y * c
        );
        vec2 rc = r + 0.5;

        float widthDynamic = mix(0.0000001, 0.01, vDepthNorm);
        if (abs(rc.y - 0.5) > widthDynamic) discard;

        // 1) Fade berdasarkan jarak (semakin jauh → lebih transparan)
        float alphaDist = 0.4 - smoothstep(300.0, 1000.0, vZ);

        // 2) Tint RGB: ambil channelFade dengan offset
        float aR = channelFade(rc.x - 0.1);
        float aG = channelFade(rc.x + 0.1);
        float aB = channelFade(rc.x + 0.3);

        // 3) Gabungkan dengan fade jauh (sesuai snippet pertama, tanpa yellow)
        aR *= alphaDist - 0.1;
        aG *= alphaDist + 0.2;
        aB *= alphaDist + 0.3;
        float finalAlpha = max(max(aR, aG), aB);

        // 4) OPACITY BOOST di 30% akhir (vDepthNorm > 0.7)
        float boost = clamp((vDepthNorm - 0.7) / 0.3, 0.0, 1.0);
        finalAlpha = finalAlpha + boost * (1.0 - finalAlpha);

        if (finalAlpha <= 0.0) discard;
        gl_FragColor = vec4(aR, aG, aB, finalAlpha);

      }
    `;

    // Build ShaderMaterial and add to scene
    const shaderMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 1.0 },
        uCore: { value: 0.35 },
        uFade: { value: 0.45 },
        uStretch: { value: 190.0 },
        uDeadZone: { value: 0.0 },
        uResolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthTest: false,
      blending: THREE.AdditiveBlending,
    });
    materialRef.current = shaderMat;

    const pointsMesh = new THREE.Points(geometry, shaderMat);
    pointsMesh.name = "meteorPoints";
    scene.add(pointsMesh);

    // Update dead‐zone uniform once at creation
    updateDeadZoneUniform();
  };

  // Main setup: run once on mount
  useEffect(() => {
    // Capture the container element once
    const container = containerRef.current;
    // 1) Scene + Camera + Renderer
    const width = window.innerWidth;
    const height = window.innerHeight;
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 2000);
    camera.position.set(0, 0, 0);
    camera.rotation.order = "YXZ";
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.domElement.style.position = "fixed";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.zIndex = "-1"; // behind everything
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 2) Create the meteor cloud
    regenerateCloud();

    // 3) Track mouse for slight camera tilt
    let mouseX = 0,
      mouseY = 0;
    const onMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      mouseY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    };
    window.addEventListener("mousemove", onMouseMove);

    // 4) Handle resize
    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      if (materialRef.current) {
        materialRef.current.uniforms.uResolution.value.set(w, h);
      }
      regenerateCloud();
    };
    window.addEventListener("resize", onResize);

    // 5) Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      const delta = clock.getDelta();
      if (materialRef.current) {
        materialRef.current.uniforms.uTime.value += delta * 300.0;
      }
      // Slight camera tilt
      camera.rotation.x = -mouseY * 0.25;
      camera.rotation.y = mouseX * 0.25;
      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };
    animate();

    // Clean up on unmount
    return () => {
      cancelAnimationFrame(animationIdRef.current);
      if (rendererRef.current) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
      sceneRef.current.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) obj.material.dispose();
      });
    };
  }, []);

  // Render a wrapper div that holds the fixed canvas + children
  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "auto",
      }}
    >
      {/* children will scroll over the fixed‐position canvas behind */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <img
          src="/images/nad.gif"
          alt="overlay bg"
          className="w-full h-full opacity-5 absolute top-0 left-0 bottom-0 right-0 z-0"
        />
        {children}
      </div>
    </div>
  );
};

export default MeteorBackground;
