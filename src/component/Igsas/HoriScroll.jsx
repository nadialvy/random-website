"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef, useState, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const HoriScroll = () => {
  // useracesref digunakan untuk membungkus flex elemen yang akan digeser kekanan
  const useRacesRef = useRef(null);
  // useraceswrapperref digunakan untuk membungkus useRacesRef
  const useRacesWrapperRef = useRef(null);
  // amounttoscroll digunakna untuk memperhitungkan jarak berapa px akan scrolled kekanan
  const [amountToScroll, setAmountToScroll] = useState(0);

  useEffect(() => {
    const updateSizes = () => {
      if (useRacesRef.current) {
        const racesWidth = useRacesRef.current.offsetWidth;
        const windowWidth = window.innerWidth;
        // amounttoscroll dihitung dengan mengurangi total lebar kesmaping elemn flex (races) dengan lebar screen user
        setAmountToScroll(racesWidth - windowWidth);
      }
    };

    // Panggil `updateSizes()` langsung saat komponen pertama kali dirender
    updateSizes();
    // Update ukuran saat user resize window
    window.addEventListener("resize", updateSizes);
    // Cleanup: Hapus event listener saat komponen di-unmount biar ga memory leak
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  useEffect(() => {
    // hanya akan berjalan jika mencapai useracesref dan useraceswrapperref
    if (
      !useRacesRef.current ||
      !useRacesWrapperRef.current ||
      amountToScroll <= 0
    )
      return;

    // expected outputnya adalah
    // 1. targetnya ketika mencapai userracesref
    // 2. akan bergeser ke kiri sejauh amount to scroll. kenapa ke kiri? karena ada minusnya
    const tween = gsap.to(useRacesRef.current, {
      x: -amountToScroll,
      ease: "none",
    });

    //  Expected Output:
    // 1️. ScrollTrigger akan aktif saat `useRacesWrapperRef` masuk viewport
    // 2️. `start: "top 2%"` → Animasi mulai saat bagian atas elemen 2% dari atas viewport
    // 3️. `end: "+=amountToScroll"` → Animasi selesai setelah scroll sejauh `amountToScroll`
    // 4️. `pin: true` → Elemen tetap di tempat (sticky effect)
    // 5️. `scrub: 1` → Animasi mengikuti kecepatan scroll (smooth scroll effect)
    // 6️. `animation: tween` → Menggunakan animasi GSAP yang sudah dibuat di atas
    ScrollTrigger.create({
      trigger: useRacesWrapperRef.current,
      start: () => (window.innerWidth >= 1024 ? "top 2%" : "top 12%"),
      end: `+=${amountToScroll}`,
      pin: true,
      animation: tween,
      scrub: 1,
    });

    return () => {
      tween.kill();
      // biome-ignore lint/complexity/noForEach: <explanation>
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [amountToScroll]);

  return (
    <>
      <div className="lg:h-[20vh] hidden lg:block border border-red-300 mt-0 lg:mt-24 pt-24 bg-[#fefeff]" />

      <div
        ref={useRacesWrapperRef}
        className="w-screen mx-auto max-lg:max-h-[500px] bg-[#1c301e]"
      >
        <div
          ref={useRacesRef}
          className="w-fit flex flex-nowrap font-archivo text-[#f8f9f4] leading-none"
        >
          <div className="pl-24 w-screen flex justify-center items-center">
            <div className="w-1/2 h-full flex flex-col justify-center">
              <p className="font-medium overflow-hidden text-[24px] lg:text-[112px]">1961</p>
              <p className="text-[16px] lg:text-[32px] overflow-hidden tracking-widest font-thin ">
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
              <p className="font-medium overflow-hidden text-[24px] lg:text-[112px]">
                1971
              </p>
              <p className="text-[16px] lg:text-[32px] overflow-hidden text-end tracking-widest font-thin ">
                İstanbul Gübre Sanayi A.Ş. (İGSAŞ) Kocaeli’nin Körfez ilçesinde
                bir kamu kuruluşu olarak kuruldu.
              </p>
            </div>
          </div>
          <div className="pl-24 w-screen flex justify-center items-center">
            <div className="w-1/2 h-full flex flex-col justify-center">
              <p className="font-medium overflow-hidden text-[24px] lg:text-[112px]">
                2004
              </p>
              <p className="text-[16px] lg:text-[32px] overflow-hidden tracking-widest font-thin ">
                İGSAŞ; özelleştirme kapsamında, 18.03.2004 tarihinde Yıldızlar
                Yatırım Holding A.Ş.{" "}
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
            <div className="w-1/2 pr-12 lg:pr-20 h-full flex flex-col justify-center items-end">
              <p className="font-medium overflow-hidden text-[24px] lg:text-[112px]">
                2007
              </p>
              <p className="text-[16px] lg:text-[32px] overflow-hidden text-end tracking-widest font-thin ">
                İGSAŞ Tesisi'nde %34.5 N'lu (Azotlu) Pril Poröz Amonyum Nitrat
                (PPAN) Üretim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HoriScroll;
