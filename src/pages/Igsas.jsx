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
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import ScrollMagic from "scrollmagic";

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

  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: false, margin: "-20%" });
  const [isSecCardHovered, setIsSecCardHovered] = useState(false);
  // text animation end

  // first card pinning start
  const triggerStartCardRef = useRef(null);
  const triggerEndCardRef = useRef(null);
  const pinFirstCardRef = useRef(null);
  const [hasScrolled1500px, setHasScrolled1500px] = useState(false);
  const placeholderRef = useRef(null); // Placeholder untuk mempertahankan layout

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
    if (
      !triggerStartCardRef.current ||
      !pinFirstCardRef.current ||
      !triggerEndCardRef.current
    )
      return;

    const controller = new ScrollMagic.Controller();

    const pinScene = new ScrollMagic.Scene({
      triggerElement: triggerStartCardRef.current,
      duration: "800",
    })
      .setPin(pinFirstCardRef.current, { pushFollowers: false })
      .addTo(controller);

    const unpinScene = new ScrollMagic.Scene({
      triggerElement: triggerEndCardRef.current, // Trigger stop scroll
      offset: 0,
    })
      .on("enter", () => {
        console.log("unpin");
        console.log(triggerEndCardRef.current.offsetTop);
        const card = pinFirstCardRef.current;
        const endTrigger = triggerEndCardRef.current;

        if (card && endTrigger) {
          const endPosition =
            endTrigger.getBoundingClientRect().top + window.scrollY;

          console.log("End trigger position:", endPosition);
          console.log("Card before unpin:", card.getBoundingClientRect());

          // Cek apakah card memiliki display: none
          const computedStyle = window.getComputedStyle(card);
          console.log("Computed style before unpin:", computedStyle);

          // Set position ke absolute agar tetap dalam alur dokumen
          card.style.position = "absolute";
          card.style.top = `${endPosition}px`;
          card.style.left = "0";
          card.style.width = "100%";
          card.style.zIndex = "1"; // Pastikan tetap terlihat
          card.classList.add("pinned-card");

          console.log("Card after unpin:", card.getBoundingClientRect());
        }
      })
      .addTo(controller);

    return () => {
      unpinScene.destroy(true);
      pinScene.destroy(true);
      controller.destroy(true);
    };
  });

  return (
    <SmoothScrolling>
      <div className="w-screen min-h-screen overflow-hidden">
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
        <div className="relative max-w-screen h-screen bg-white px-16 mt-24">
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
                  delay: i / 10,
                }}
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </p>
          <div className="absolute top-[70%]" ref={triggerStartCardRef}>
            {}{" "}
          </div>

          <div className="flex items-start justify-center mt-10 gap-x-8">
            {/* First Card */}
            <div className="relative w-1/2">
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
                      Zengin gübre yelpazemizle Türk tarımının verimliliğini ve
                      kalitesini artırmayı hedefliyoruz. Klasikten özele, her
                      türlü bitki ve toprak tipine uygun çözümler sunarak,
                      bereketli hasatlar için güvenilir ve yenilikçi ürünler
                      sağlıyoruz.
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
            <div
              onMouseEnter={() => setIsSecCardHovered(true)}
              onMouseLeave={() => setIsSecCardHovered(false)}
              className="w-1/2 relative border rounded-3xl group overflow-hidden bg-center hover:bg-[1600%] ease-in-out transition-all duration-700 bg-industrial bg-cover h-[500px] bg-no-repeat"
            >
              <div className="flex flex-col justify-between h-full p-8 group-hover:opacity-0 ease-in transition-all duration-300">
                <Factory size={36} color="white" />
                <div className="flex flex-col justify-center items-start text-white gap-y-10">
                  <p className="font-semibold text-[40px]">
                    Endüstriyel Ürünler
                  </p>
                  <p className="text-[26px] font-light">
                    Geniş endüstriyel ürün yelpazemizle Türk sanayisine destek
                    olmaya devam ediyoruz.
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
                      veriyoruz. anayiyi Güçlendiriyoruz, İşinizi Büyütüyoruz.
                      "İşletmenizi ileri taşıyacak çözümlerle tanışın. Fikirden
                      gerçeğe, inovatif çözümlerle sektöre yön veriyoruz.
                      anayiyi Güçlendiriyoruz, İşinizi Büyütüyoruz. "İşletmenizi
                      ileri taşıyacak çözümlerle tanışın.
                    </p>
                  </div>
                </div>
                <motion.div
                  key={isSecCardHovered}
                  className="absolute bg-[#568c9f30] z-0 rounded-full"
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
          </div>
        </div>

        <div className="mt-16 flex justify-center items-center gap-x-12">
          <div className="w-1/2">
            <div className="text-black" ref={triggerEndCardRef}>
              {}{" "}
            </div>
          </div>
          <div className="w-1/2">
            <div>
              <p className="text-[#002b04] text-[64px]">Güncel Haberler</p>
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
                  <div className="bg-cover w-full h-full bg-no-repeat bg-article2 hover:bg-[110%] transition-all duration-300 ease-in-out"></div>
                </div>
                <div className="w-1/2">
                  <p className="text-[16px] text-[#002b04] font-semibold ">
                    18 Temmuz 2024 Perşembe
                  </p>
                  <p className="text-[24px] text-[#002b04] leading-tight mt-4">
                    GSAŞ, Samsun’daki Yeni Yatırımıyla Çiftçinin Kompoze ve
                    GSAŞ, Samsun’daki Yeni
                  </p>
                </div>
              </div>
              <div className="flex pr-8 justify-start items-start gap-4">
                <div className="w-1/2 h-[150px] rounded-xl">
                  <div className="bg-cover w-full h-full bg-no-repeat bg-article1 hover:bg-[110%] transition-all duration-300 ease-in-out">
                    {}
                  </div>
                </div>
                <div className="w-1/2">
                  <p className="text-[16px] text-[#002b04] font-semibold ">
                    28 Haziran 2024 Cuma
                  </p>
                  <p className="text-[24px] text-[#002b04] leading-tight mt-4">
                    Organomineral Gübre İhtiyacını Karşılayacak GSAŞ,
                    Samsun’daki Yeni Gubre
                  </p>
                </div>
              </div>
              <div className="flex pr-8 justify-start items-start gap-4">
                <div className="w-1/2 h-[150px] rounded-xl">
                  <div className="bg-cover w-full h-full bg-no-repeat bg-article2 hover:bg-[140%] transition-all duration-300 ease-in-out">
                    {}
                  </div>
                </div>
                <div className="w-1/2">
                  <p className="text-[16px] text-[#002b04] font-semibold ">
                    18 Temmuz 2024 Perşembe
                  </p>
                  <p className="text-[24px] text-[#002b04] leading-tight mt-4">
                    GSAŞ, Samsun’daki Yeni Yatırımıyla Çiftçinin Kompoze ve
                    GSAŞ, Samsun’daki Yeni
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-96">a</div>
        <div className="mt-96">a</div>
        <div className="mt-96">a</div>
      </div>
    </SmoothScrolling>
  );
}
