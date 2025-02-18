import { PenTool, Eraser } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Aos from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger);

const CanvasDraw = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [color] = useState("#c8aff0");
  const [brushSize] = useState(8);
  const [isEraserMode, setIsEraserMode] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctxRef.current = ctx;
  }, [color, brushSize]);

  // Start gambar
  const startDrawing = (event) => {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(event.clientX, event.clientY);
    setDrawing(true);
  };

  // Proses gambar atau hapus line
  const draw = (event) => {
    if (!drawing) return;
    ctxRef.current.lineTo(event.clientX, event.clientY);
    if (isEraserMode) {
      ctxRef.current.strokeStyle = "#20191b";
      ctxRef.current.lineWidth = 28;
    } else {
      ctxRef.current.strokeStyle = color;
      ctxRef.current.lineWidth = brushSize;
    }
    ctxRef.current.stroke();
  };

  // Stop gambar
  const stopDrawing = () => {
    ctxRef.current.closePath();
    setDrawing(false);
  };

  // toggle brush dan eraser
  const toggleEraser = () => setIsEraserMode(true);
  const toggleBrush = () => setIsEraserMode(false);

  // Horizontal Line Animation
  useEffect(() => {
    // Horizontal Line Animation
    gsap.fromTo(
      ".horizontal-line-1",
      { width: "0%", left: "70%", backgroundColor: "#fff" },
      {
        width: "100%",
        left: "0%",
        backgroundColor: "#307fff",
        duration: 0.9,
        opacity: 0.6,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      ".horizontal-line-2",
      { width: "0%", left: "30%", backgroundColor: "#fff" },
      {
        width: "100%",
        left: "0%",
        backgroundColor: "#307fff",
        duration: 0.6,
        delay: 0.5,
        opacity: 0.6,
        ease: "power2.out",
      }
    );

    // Vertical Line Animation
    gsap.fromTo(
      ".vertical-line-1",
      { height: "0%", top: "50%", backgroundColor: "#fff" },
      {
        height: "100%",
        top: "0%",
        backgroundColor: "#307fff",
        duration: 0.6,
        opacity: 0.6,

        ease: "power2.out",
      }
    );

    gsap.fromTo(
      ".vertical-line-2",
      { height: "0%", top: "90%", backgroundColor: "#fff" },
      {
        height: "100%",
        top: "0%",
        backgroundColor: "#307fff",
        opacity: 0.6,
        duration: 0.9,
        delay: 0.2,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <>
      {/* canvas */}
      <div className="z-30 overflow-hidden relative w-full h-[99vh] draw">
        {/* asset start */}
        <div className="flex justify-between items-center">
          <p className="z-10 text-white pointer-events-none text-[130px] overflow-hidden font-semibold absolute top-[36%] left-[15%]">
            Framework
          </p>
          <div className="flex flex-col gap-y-3 bg-white p-2 rounded-xl absolute top-[35.5%] z-20 right-[2%] items-center justify-center">
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <div
              className={`${
                !isEraserMode ? "bg-black" : "bg-white"
              } p-2 rounded-md`}
              onClick={toggleBrush}
            >
              <PenTool
                size={30}
                className={`${!isEraserMode ? "text-white" : "text-black"}`}
              />
            </div>
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <div
              className={`${
                isEraserMode ? "bg-black" : "bg-white"
              } p-2 rounded-md`}
              onClick={toggleEraser}
            >
              <Eraser
                size={30}
                className={`${isEraserMode ? "text-white" : "text-black"}`}
              />
            </div>
          </div>
        </div>
        <img
          src="/images/framework/blue.png"
          alt="blue"
          className="absolute top-[10%] right-[35%] pointer-events-none z-10 w-40"
          data-aos="zoom-in"
          duration="200"
        />
        <img
          src="/images/framework/star.png"
          alt="blue"
          className="absolute top-[50%] left-[10%] pointer-events-none z-10 w-28 "
          data-aos="zoom-in"
          duration="300"
          delay="100"
        />
        <img
          src="/images/framework/smile.png"
          alt="blue"
          className="absolute top-[34%] left-[20%] pointer-events-none z-10 w-20"
          data-aos="zoom-in"
          duration="400"
        />
        <img
          src="/images/framework/cloud.png"
          alt="blue"
          className="absolute top-[30%] right-[10%] pointer-events-none z-10 w-28"
          data-aos="zoom-in"
          duration="300"
          delay="20"
        />
        <img
          src="/images/framework/lamp.png"
          alt="blue"
          className="absolute top-[56%] right-[19%] pointer-events-none z-10 w-52"
          data-aos="zoom-in"
          duration="300"
        />
        {/* asset end */}

        {/* line grid start */}
        <div className="line-container">
          <div className="vertical-line-1 h-full w-[1px] bg-[#307fff] pointer-events-none absolute top-0 bottom-0 left-[14.9%] bg-opacity-60 z-0" />
          <div className="vertical-line-2 h-full w-[1px] bg-[#307fff] pointer-events-none absolute top-0 bottom-0 right-[42.3%] bg-opacity-60 z-0" />
          <div className="horizontal-line-1 h-[1px] w-full bg-[#307fff] pointer-events-none absolute left-0 right-0 top-[41.5%] bg-opacity-60 z-0" />
          <div className="horizontal-line-2 h-[1px] w-full bg-[#307fff] pointer-events-none absolute left-0 right-0 top-[56.5%] bg-opacity-60 z-0" />
        </div>
        {/* line grid end */}

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="w-full h-auto z-20 bg-[#20191b]"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />
      </div>
    </>
  );
};

export default CanvasDraw;
