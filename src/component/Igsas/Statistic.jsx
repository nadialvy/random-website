import { useRef, useEffect, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import gsap from "gsap";
const Statistic = () => {
  const circleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-180, 180]);

  const firstNumberRef = useRef(null);
  const [firstNumberVal, setFirstNumberVal] = useState(0);
  useEffect(() => {
    const target = {
      value: firstNumberVal.value,
    };

    gsap.to(target, {
      duration: 5,
      value: "+=120",
      roundProps: "value",
      ease: "power1.out",
      onUpdate: () => {
        setFirstNumberVal(Math.floor(target.value));
      },
      scrollTrigger: {
        trigger: firstNumberRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, [firstNumberVal.value]);

  const secNumberRef = useRef(null);
  const [secNumberVal, setSecNumberVal] = useState(0);
  useEffect(() => {
    const target = {
      value: secNumberVal.value,
    };

    gsap.to(target, {
      duration: 4,
      ease: "power1.out",
      value: "+=24",
      roundProps: "value",
      onUpdate: () => {
        setSecNumberVal(Math.floor(target.value));
      },
      scrollTrigger: {
        trigger: secNumberRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, [secNumberVal.value]);

  const thirdNumberRef = useRef(null);
  const [thirdNumberVal, setThirdNumberVal] = useState(0);
  useEffect(() => {
    const target = {
      value: thirdNumberVal.value,
    };

    gsap.to(target, {
      duration: 8,
      ease: "power4.out",
      roundProps: "value",
      value: "+=50",
      onUpdate: () => {
        setThirdNumberVal(Math.floor(target.value));
      },
      scrollTrigger: {
        start: "top 80%",
        trigger: thirdNumberRef.current,
        toggleActions: "play none none none",
      },
    });
  }, [thirdNumberVal.value]);

  return (
    <div className="relative h-[800px]">
      <div className="w-full bg-stats h-[700px] bg-center bg-cover bg-no-repeat bg-fixed overflow-hidden">
        <div className="lg:p-16 p-4 flex flex-col lg:flex-row items-center justify-start gap-x-8">
          <div className="lg:w-3/5 w-full flex flex-col gap-y-4">
            <p className="text-[#1c4734] overflow-hidden text-[32px] lg:text-[60px]">
              Rakamlarla İGSAŞ:
            </p>
            <p className="text-[#1c4734] font-thin text-[16px] lg:text-[30px]">
              Her yıl yükselen başarı ivmesiyle Türkiye’nin en büyük gübre
              üreticilerindendir.
            </p>
            <div className="flex gap-20 mt-8 text-[#1c4734]">
              <div className="flex flex-col gap-y-10">
                <div className="flex flex-col items-start justify-start">
                  <p
                    className="lg:text-[96px] text-[24px] overflow-hidden leading-tight"
                    ref={firstNumberRef}
                  >
                    {firstNumberVal}+
                  </p>
                  <p className="leading-tight overflow-hidden -pb-12">
                    CALISAN
                  </p>
                </div>
                <div className="flex flex-col items-start overflow-hidden justify-start">
                  <p
                    className="lg:text-[96px] text-[24px] overflow-hidden leading-tight"
                    ref={secNumberRef}
                  >
                    {secNumberVal}+
                  </p>
                  <p className="leading-tight overflow-hidden -pb-12">TESIS</p>
                </div>
              </div>
              <div className="flex flex-col gap-y-10">
                <div className="flex flex-col items-start overflow-hidden justify-start">
                  <p
                    className="lg:text-[96px] text-[24px] overflow-hidden leading-tight"
                    ref={secNumberRef}
                  >
                    {secNumberVal}
                  </p>
                  <p className="leading-tight overflow-hidden -pb-12">DEPO</p>
                </div>
                <div className="flex flex-col items-start overflow-hidden justify-start">
                  <p
                    className="lg:text-[96px] text-[24px] overflow-hidden leading-tight"
                    ref={thirdNumberRef}
                  >
                    {thirdNumberVal}+
                  </p>
                  <p className="leading-tight overflow-hidden -pb-12">
                    YIL TECRÜBE
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/5 w-full lg:py-[150px] py-[140px] overflow-hidden relative flex justify-center items-center">
            <img
              src="https://www.igsas.com.tr/assets/images/icons/stats-item-01-tr.svg"
              alt="img"
              className="absolute top-[20%] lg:-top-[0] left-0 z-50 lg:w-[70%] w-[40%]"
            />
            <img
              src="https://www.igsas.com.tr/assets/images/icons/stats-item-02.svg"
              alt="daun"
              className="absolute bottom-[20%] right-[10%] z-40"
            />
            <img
              src="https://www.igsas.com.tr/assets/images/icons/stats-item-02.svg"
              alt="daun"
              className="absolute bottom-[22%] w-[26%] left-[10%] z-40"
            />
            <motion.div
              ref={circleRef}
              style={{ rotate, clipPath: "circle(50% at 50% 50%)" }}
              className="lg:w-[360px] lg:h-[360px] w-[200px] h-[200px] rounded-full bg-center bg-no-repeat bg-apaajadeh bg-cover"
            />{" "}
          </div>
        </div>
      </div>
      {/* <div className="absolute inset-0 bg-white/75" /> */}
    </div>
  );
};

export default Statistic;
