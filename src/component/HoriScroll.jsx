"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef, useState, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const HoriScroll = () => {
  const useRacesRef = useRef(null);
  const useRacesWrapperRef = useRef(null);
  const [amountToScroll, setAmountToScroll] = useState(0);

  useEffect(() => {
    const updateSizes = () => {
      if (useRacesRef.current) {
        const racesWidth = useRacesRef.current.offsetWidth;
        const windowWidth = window.innerWidth;
        setAmountToScroll(racesWidth - windowWidth);
      }
    };

    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  useEffect(() => {
    if (
      !useRacesRef.current ||
      !useRacesWrapperRef.current ||
      amountToScroll <= 0
    )
      return;

    const tween = gsap.to(useRacesRef.current, {
      x: -amountToScroll,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: useRacesWrapperRef.current,
      start: "top 2%",
      end: `+=${amountToScroll}`,
      pin: true,
      animation: tween,
      scrub: 1,
      markers: true,
    });

    return () => {
      tween.kill();
      // biome-ignore lint/complexity/noForEach: <explanation>
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [amountToScroll]);

  return (
    <>
      <div className="h-[50vh] bg-[#fefeff]"></div>

      <div ref={useRacesWrapperRef} className="overflow-hidden bg-[#002a04]">
        <div
          ref={useRacesRef}
          className="w-fit flex flex-nowrap font-archivo text-[#f8f9f4] leading-none"
        >
          <div className="pl-24 w-screen flex justify-center items-center">
            <div className="w-1/2 h-full flex flex-col justify-center">
              <p className="font-medium overflow-hidden text-[128px]">1961</p>
              <p className="text-[36px] overflow-hidden tracking-widest font-thin ">
                Kütahya Azot Fabrikası kuruldu.
              </p>
            </div>
            <div className="w-1/2 overflow-y-hidden flex flex-col items-end justify-end">
              <img
                alt="img"
                src="/images/hist-1.png"
                className="pl-20 w-[700px] overflow-y-hidden h-[700px]"
              />
            </div>
          </div>
          <div className="w-screen flex justify-center items-center">
            <div className="w-1/2 overflow-y-hidden flex flex-col items-start justify-start">
              <img
                alt="img"
                src="/images/hist-2.png"
                className="w-[700px] overflow-y-hidden h-[700px]"
              />
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center items-end">
              <p className="font-medium overflow-hidden text-[128px]">1971</p>
              <p className="text-[36px] overflow-hidden text-end tracking-widest font-thin ">
                İstanbul Gübre Sanayi A.Ş. (İGSAŞ) Kocaeli’nin Körfez ilçesinde
                bir kamu kuruluşu olarak kuruldu.
              </p>
            </div>
          </div>
          <div className="pl-24 w-screen flex justify-center items-center">
            <div className="w-1/2 h-full flex flex-col justify-center">
              <p className="font-medium overflow-hidden text-[128px]">2004</p>
              <p className="text-[36px] overflow-hidden tracking-widest font-thin ">
                İGSAŞ; özelleştirme kapsamında, 18.03.2004 tarihinde Yıldızlar
                Yatırım Holding A.Ş. tarafından satın alındı.{" "}
              </p>
            </div>
            <div className="w-1/2 overflow-y-hidden flex flex-col items-end justify-end">
              <img
                alt="img"
                src="/images/hist-3.png"
                className="pl-20 w-[700px] overflow-y-hidden h-[700px]"
              />
            </div>
          </div>
          <div className="w-screen flex justify-center items-center">
            <div className="w-1/2 overflow-y-hidden flex flex-col items-start justify-start">
              <img
                alt="img"
                src="/images/hist-4.png"
                className="w-[700px] overflow-y-hidden h-[700px]"
              />
            </div>
            <div className="w-1/2 pr-20 h-full flex flex-col justify-center items-end">
              <p className="font-medium overflow-hidden text-[128px]">2007</p>
              <p className="text-[36px] overflow-hidden text-end tracking-widest font-thin ">
                İGSAŞ Tesisi'nde %34.5 N'lu (Azotlu) Pril Poröz Amonyum Nitrat
                (PPAN) Üretim Ünitesi devreye girdi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HoriScroll;
