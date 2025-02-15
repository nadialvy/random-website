import { useRef, useState, useEffect } from "react";

const CanvasDraw = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [color] = useState("#c8aff0");
  const [brushSize] = useState(8);

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

  // Mulai menggambar
  const startDrawing = (event) => {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(event.clientX, event.clientY);
    setDrawing(true);
  };

  // Proses menggambar
  const draw = (event) => {
    if (!drawing) return;
    ctxRef.current.lineTo(event.clientX, event.clientY);
    ctxRef.current.stroke();
  };

  // Berhenti menggambar
  const stopDrawing = () => {
    ctxRef.current.closePath();
    setDrawing(false);
  };

  return (
    <div className="relative w-full debug-purple">
      {/* canvas */}
      <div className="relative debug-red w-full h-full draw">
        {/* asset start */}
        <p className="z-10 text-white text-[140px] font-medium absolute top-[30%] left-[15%]">
          Framework
        </p>
        <img
          src="/images/framework/blue.png"
          alt="blue"
          className="absolute top-[10%] right-[35%] z-10 w-40"
        />
        <img
          src="/images/framework/star.png"
          alt="blue"
          className="absolute top-[50%] left-[10%] z-10 w-28 "
        />
        <img
          src="/images/framework/smile.png"
          alt="blue"
          className="absolute top-[24%] left-[20%] z-10 w-20"
        />
        <img
          src="/images/framework/cloud.png"
          alt="blue"
          className="absolute top-[30%] right-[10%] z-10 w-28"
        />
        <img
          src="/images/framework/lamp.png"
          alt="blue"
          className="absolute top-[60%] right-[10%] z-10 w-64"
        />
        {/* asset end */}

        {/* line grid start */}
        <div className="h-full w-[1px] bg-[#307fff] absolute top-0 bottom-0 left-[15%] bg-opacity-60 z-0" />
        <div className="h-full w-[1px] bg-[#307fff] absolute top-0 bottom-0 right-[41%] bg-opacity-60 z-0" />
        <div className="h-[1px] w-full bg-[#307fff] absolute left-0 right-0 top-[36%] bg-opacity-60 z-0" />
        <div className="h-[1px] w-full bg-[#307fff] absolute left-0 right-0 top-[52%] bg-opacity-60 z-0" />
        <div className="h-[1px] w-full bg-[#307fff] absolute left-0 right-0 bottom-[22%] bg-opacity-60 z-0" />

        {/* line grid end */}

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="w-full h-full z-20 bg-[#20191b]"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />
      </div>
      <img
        src="/images/framework/section1-draw.webp"
        alt="draw"
        className=" w-[500px] absolute debug-red -bottom-[34%] left-[20%]"
      />
    </div>
  );
};

export default CanvasDraw;
