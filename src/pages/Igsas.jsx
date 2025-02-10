import SmoothScrolling from "../component/SmoothScrolling";
import {
  ArrowLeft,
  ArrowRight,
  Trees,
  Factory,
  CircleHelp,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion, useTransform, useInView, useScroll } from "framer-motion";
import ScrollMagic from "scrollmagic";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Igsas() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 200,
      once: false,
      mirror: true,
      disable: false,
    });
  }, []);

  // text animation start
  const text = "Doğanın gücünü koruyarak geleceğe bereket katıyoruz.".split(
    " "
  );
  const sustanText = "Sürdürülebilirlik".split("");
  const sustanSubText =
    "Bu topraklardan doğan ve bu toprakların değerleriyle kendini şekillendiren Yıldızlar Yatırım Holding'in; bugüne kadar gerçekleştirdiği tüm faaliyetlerinin ana amacı insanımız ve insanlık için katma değer üretmektir.".split(
      " "
    );

  const textRef = useRef(null);
  const sustanTextRef = useRef(null);
  const sustanSubTextRef = useRef(null);
  const isInView = useInView(textRef, { once: false, margin: "-20%" });
  const isInViewSustan = useInView(sustanTextRef, {
    once: false,
    margin: "-20%",
  });
  const [isSecCardHovered, setIsSecCardHovered] = useState(false);
  // text animation end

  // first card pinning start
  const triggerStartCardRef = useRef(null);
  const pinFirstCardRef = useRef(null);
  const [hasScrolled1500px, setHasScrolled1500px] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1500 && !hasScrolled1500px) {
        setHasScrolled1500px(true);
      } else if (window.scrollY <= 1500 || window.scrollY >= 2500) {
        setHasScrolled1500px(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled1500px]);

  // initialize scrollMagic ketika komponennya mount dan dibersihin ketika komponennya unmount
  useEffect(() => {
    // kalau ref-nya belum ada, keluar dari function
    if (!triggerStartCardRef.current || !pinFirstCardRef.current) return;

    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      triggerElement: triggerStartCardRef.current,
      duration: "780",
      offset: 0,
    })
      .setPin(pinFirstCardRef.current)
      .addTo(controller);

    return () => {
      controller.destroy(true);
    };
  });

  // stat animation
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
      duration: 3,
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
      duration: 3,
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
      duration: 3,
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
    <>
      <SmoothScrolling>
        <div className="w-screen min-h-screen overflow-x-hidden">
          {/* Hero Section */}
          <div className="bg-hero-img bg-fixed flex flex-col justify-end bg-center bg-cover h-screen pb-12 bg-no-repeat">
            <div
              className="mt-16 px-16"
              data-aos="fade-down"
              data-aos-duration="1300"
              data-aos-delay="200"
              data-aos-once="false"
              data-aos-anchor-placement="top-bottom"
            >
              <p className="text-[64px] leading-[74px] text-white font-semibold max-w-[1200px]">
                The Legacy of 54 Years of History, <br /> the Prosperity of the
                Future
              </p>
              <div className="flex gap-4 mt-12">
                <div className="border-white flex justify-center items-center rounded-full border-2 w-16 h-16">
                  <ArrowLeft size={36} className="font-bold text-white" />
                </div>
                <div className="border-white rounded-full border-2 w-16 h-16 flex justify-center items-center">
                  <ArrowRight size={36} className="font-bold text-white" />
                </div>
              </div>
            </div>
          </div>
          {/* Card and Article Section */}
          <div className="relative max-w-screen bg-white px-16 mt-24">
            <p
              className="text-[#002b04] text-[64px] max-w-[1200px] mb-20 leading-[74px]"
              ref={textRef}
            >
              {text.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                  transition={{
                    duration: 0.25,
                    delay: i * 0.1,
                  }}
                  key={el}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </p>
            <div className="absolute top-[30%]" ref={triggerStartCardRef} />

            <div className="mt-10">
              <div className="w-full flex items-start justify-start gap-x-8">
                {/* First Card */}
                <div className="w-1/2">
                  <div
                    ref={pinFirstCardRef}
                    className="rounded-3xl overflow-hidden bg-center bg-agricultural bg-cover h-[500px] bg-no-repeat"
                  >
                    <div className="flex flex-col justify-between h-full p-8">
                      <Trees size={36} color="white" />
                      <div className="flex flex-col justify-center items-start text-white gap-y-10">
                        <p className="font-semibold text-[40px]">
                          Tarımsal Ürünler
                        </p>
                        <p className="text-[26px] font-light">
                          Zengin gübre yelpazemizle Türk tarımının verimliliğini
                          ve kalitesini artırmayı hedefliyoruz. Klasikten özele,
                          her türlü bitki ve toprak tipine uygun çözümler
                          sunarak, bereketli hasatlar için güvenilir ve
                          yenilikçi ürünler sağlıyoruz.
                        </p>
                      </div>
                      <button
                        className="bg-[#42FF00] w-fit rounded-full"
                        type="button"
                      >
                        <div className="flex justify-center items-center gap-x-2 p-4">
                          <p className="text-[12px] font-medium">INCELE</p>
                          <ArrowRight size={20} />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Second Card */}
                <div className="w-1/2 h-[1300px]">
                  <div
                    onMouseEnter={() => setIsSecCardHovered(true)}
                    onMouseLeave={() => setIsSecCardHovered(false)}
                    className="w-full relative rounded-3xl group overflow-hidden bg-center hover:bg-[1600%] ease-in-out transition-all duration-700 bg-industrial bg-cover h-[500px] bg-no-repeat"
                  >
                    <div className="flex flex-col justify-between h-full p-8 group-hover:opacity-0 ease-in transition-all duration-300">
                      <Factory size={36} color="white" />
                      <div className="flex flex-col justify-center items-start text-white gap-y-10">
                        <p className="font-semibold text-[40px]">
                          Endüstriyel Ürünler
                        </p>
                        <p className="text-[26px] font-light">
                          Geniş endüstriyel ürün yelpazemizle Türk sanayisine
                          destek olmaya devam ediyoruz.
                        </p>
                      </div>
                      <button
                        className="bg-[#42FF00] w-fit rounded-full"
                        type="button"
                      >
                        <div className="flex justify-center items-center gap-x-2 p-4">
                          <p className="text-[12px] font-medium">INCELE</p>
                          <ArrowRight size={20} />
                        </div>
                      </button>
                    </div>
                    <div className="w-full overflow-hidden h-full bg-[#4e8699] bg-opacity-50 absolute top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 ease-in transition-all duration-300">
                      <div className="flex flex-col opacity-100 z-10 justify-start items-start gap-y-4 w-full h-full p-8">
                        <CircleHelp size={40} color="white" />
                        <div>
                          <p className="text-white font-semibold text-[48px]">
                            Yenilikçi ve Minimalist
                          </p>
                          <p className="font-light text-[20px] text-white">
                            Fikirden gerçeğe, inovatif çözümlerle sektöre yön
                            veriyoruz. anayiyi Güçlendiriyoruz, İşinizi
                            Büyütüyoruz. "İşletmenizi ileri taşıyacak çözümlerle
                            tanışın. Fikirden gerçeğe, inovatif çözümlerle
                            sektöre yön veriyoruz. anayiyi Güçlendiriyoruz,
                            İşinizi Büyütüyoruz. "İşletmenizi ileri taşıyacak
                            çözümlerle tanışın.
                          </p>
                        </div>
                      </div>
                      <motion.div
                        key={isSecCardHovered}
                        className="absolute bg-[#568c9f30] z-0 rounded-full"
                        style={{ willChange: "transform, opacity" }}
                        initial={{
                          top: "-140%",
                          left: "-140%",
                          width: 1000,
                          height: 1000,
                        }}
                        animate={{
                          top: "-50%",
                          left: "-50%",
                          scale: 1.5,
                          transition: {
                            duration: 3,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0.4,
                          },
                        }}
                      >
                        {}
                      </motion.div>
                    </div>
                  </div>
                  {/* Article */}
                  <div className="w-full mt-12">
                    <div>
                      <p className="text-[#002b04] text-[64px]">
                        Güncel Haberler
                      </p>
                      <button
                        className="bg-[#f0f2a4] hover:gap-x-16 duration-300 ease-in-out transition-all hover:bg-[#c4ae78] rounded-full px-6 py-5 flex justify-center items-center gap-x-8"
                        type="button"
                      >
                        <p className="text-[24px]">TÜMÜ</p>
                        <ArrowRight size={24} className="text-[#002b04]" />
                      </button>
                    </div>
                    <div className="flex flex-col mt-12 justify-center items-center gap-6">
                      <div className="flex pr-8 justify-start items-start gap-4">
                        <div className="w-1/2 h-[150px] rounded-xl">
                          <div className="bg-cover w-full h-full bg-no-repeat bg-article1 hover:bg-[110%] transition-all duration-300 ease-in-out">
                            {}
                          </div>
                        </div>
                        <div className="w-1/2">
                          <p className="text-[16px] text-[#002b04] font-semibold ">
                            18 Temmuz 2024 Perşembe
                          </p>
                          <p className="text-[22px] text-[#002b04] leading-tight mt-4">
                            GSAŞ, Samsun’daki Yeni Yatırımıyla Çiftçinin Kompoze
                            ve GSAŞ, Samsun’daki Yeni
                          </p>
                        </div>
                      </div>
                      <div className="flex pr-8 justify-start items-start gap-4">
                        <div className="w-1/2 h-[150px] rounded-xl">
                          <div className="bg-cover w-full h-full bg-no-repeat bg-article2 hover:bg-[110%] transition-all duration-300 ease-in-out">
                            {}
                          </div>
                        </div>
                        <div className="w-1/2">
                          <p className="text-[16px] text-[#002b04] font-semibold ">
                            28 Haziran 2024 Cuma
                          </p>
                          <p className="text-[22px] text-[#002b04] leading-tight mt-4">
                            Organomineral Gübre İhtiyacını Karşılayacak GSAŞ,
                            Samsun’daki Yeni Gubre
                          </p>
                        </div>
                      </div>
                      <div className="flex pr-8 justify-start items-start gap-4">
                        <div className="w-1/2 h-[150px] rounded-xl">
                          <div className="bg-cover w-full h-full bg-no-repeat bg-article3 hover:bg-[140%] transition-all duration-300 ease-in-out">
                            {}
                          </div>
                        </div>
                        <div className="w-1/2">
                          <p className="text-[16px] text-[#002b04] font-semibold ">
                            11 Samsun 2022 Perşembe
                          </p>
                          <p className="text-[22px] text-[#002b04] leading-tight mt-4">
                            GSAŞ, Samsun’daki Yeni Organomineral Gübre
                            İhtiyacını "İşletmenizi ileri taşıyacak
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sustan Section */}
          <div className="relative h-[500px] mt-32">
            <div className="bg-sustan h-[500px] bg-fixed flex flex-col justify-start bg-center bg-cover p-12 bg-no-repeat relative">
              <div className="absolute inset-0 bg-black/25">{}</div>
              <p
                ref={sustanTextRef}
                className="relative font-medium text-white text-[64px]"
              >
                {sustanText.map((el, i) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={
                      isInViewSustan ? { opacity: 1, y: 0 } : { opacity: 0 }
                    }
                    transition={{
                      duration: 0.25,
                      delay: i / 10,
                    }}
                    key={el}
                  >
                    {el}
                  </motion.span>
                ))}
              </p>
              <p
                ref={sustanSubTextRef}
                className="text-white text-[28px] mt-12 font-light relative "
              >
                {sustanSubText.map((el, i) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={
                      isInViewSustan ? { opacity: 1, y: 0 } : { opacity: 0 }
                    }
                    transition={{
                      duration: 0.25,
                      delay: i / 7,
                    }}
                    key={el}
                  >
                    {el}{" "}
                  </motion.span>
                ))}
              </p>
              <ChevronRight
                strokeWidth={3}
                color="white"
                className="relative mt-20"
                size={44}
              />
            </div>
          </div>

          {/* Topragin Section */}
          <div className="mt-32 bg-[#fefffe] w-full">
            <div className="w-full flex justify-start items-start gap-x-12 pt-16 px-16">
              <div className="w-2/5 rounded-t-full bg-topragin1 bg-cover bg-no-repeat h-[500px]" />
              <div className="w-3/5 flex flex-col justify-between items-start h-[500px]">
                <p className="text-[#1c4734] text-[32px]">Toprağın İzinde</p>
                <p className="text-[#1c4734] text-[72px] leading-[80px]">
                  Potasyum Gübresi Nedir? | Çeşitleri ve
                </p>
                <p className="text-[#1c4734] font-thin text-[24px]">
                  Tarımda verimliliği artırmak ve bitkilerin sağlıklı gelişimini
                  desteklemek için kullanılan gübreler, bitkilerin ihtiyaç
                  duyduğu besin maddelerinin toprağa sağlanmasını sağlar. Bu
                  gübrelerin başında po...
                </p>
                <button
                  className="bg-[#42ff00] group hover:gap-x-16 duration-300 ease-in-out transition-all hover:bg-[#2a6b4a] rounded-full px-6 py-5 flex justify-center items-center gap-x-8"
                  type="button"
                >
                  <p className="text-[24px] group-hover:text-white transition-all duration-300 ease-in-out">
                    DEVAMINI OKU
                  </p>
                  <ArrowRight
                    size={24}
                    className="text-[#002b04] group-hover:text-white transition-all duration-300 ease-in-out"
                  />
                </button>
              </div>
            </div>
          </div>
          {/* Stat Section */}
          <div className="relative h-[700px]">
            <div className="w-full bg-stats h-[700px] bg-center bg-cover bg-no-repeat bg-fixed overflow-hidden">
              <div className="p-16 flex items-center justify-start gap-x-8">
                <div className="w-3/5 flex flex-col gap-y-4">
                  <p className="text-[#1c4734] text-[60px]">
                    Rakamlarla İGSAŞ:
                  </p>
                  <p className="text-[#1c4734] font-thin text-[30px]">
                    Her yıl yükselen başarı ivmesiyle Türkiye’nin en büyük gübre
                    üreticilerindendir.
                  </p>
                  <div className="flex gap-20 mt-8 text-[#1c4734]">
                    <div className="flex flex-col gap-y-10">
                      <div className="flex flex-col items-start justify-start">
                        <p
                          className="text-[96px] leading-tight"
                          ref={firstNumberRef}
                        >
                          {firstNumberVal}+
                        </p>
                        <p className="leading-tight -pb-12">CALISAN</p>
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <p
                          className="text-[96px] leading-tight"
                          ref={secNumberRef}
                        >
                          {secNumberVal}+
                        </p>
                        <p className="leading-tight -pb-12">TESIS</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-10">
                      <div className="flex flex-col items-start justify-start">
                        <p
                          className="text-[96px] leading-tight"
                          ref={secNumberRef}
                        >
                          {secNumberVal}
                        </p>
                        <p className="leading-tight -pb-12">DEPO</p>
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <p
                          className="text-[96px] leading-tight"
                          ref={thirdNumberRef}
                        >
                          {thirdNumberVal}+
                        </p>
                        <p className="leading-tight -pb-12">YIL TECRÜBE</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-2/5 py-[150px] overflow-hidden relative flex justify-center items-center">
                  <img
                    src="https://www.igsas.com.tr/assets/images/icons/stats-item-01-tr.svg"
                    alt="img"
                    className="absolute -top-[0] left-0 z-50 w-[70%]"
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
                    className="w-[360px] h-[360px] rounded-full bg-center bg-no-repeat bg-apaajadeh bg-cover"
                  />{" "}
                </div>
              </div>
            </div>
            {/* <div className="absolute inset-0 bg-white/75" /> */}
          </div>
          <div className="h-[300px]">{}</div>
        </div>
      </SmoothScrolling>
    </>
  );
}
