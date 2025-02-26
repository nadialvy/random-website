import SmoothScrolling from "../component/SmoothScrolling";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoriScroll from "../component/Igsas/HoriScroll";
import Statistic from "../component/Igsas/Statistic";
import CardArticle from "../component/Igsas/CardArticle";

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

  return (
    <>
      <SmoothScrolling>
        <div className="w-screen min-h-screen overflow-x-hidden">
          {/* Hero Section */}
          <div className="bg-hero-img bg-fixed flex flex-col justify-end bg-center bg-cover h-screen pb-12 bg-no-repeat">
            <div
              className="mt-16 px-16 max-lg:px-4"
              data-aos="fade-down"
              data-aos-duration="1300"
              data-aos-delay="200"
              data-aos-once="false"
              data-aos-anchor-placement="top-bottom"
            >
              <p className="text-[64px] max-lg:text-[24px] max-lg:leading-none overflow-hidden leading-[74px] text-white font-semibold max-w-[1200px]">
                The Legacy of 54 Years of History, <br /> the Prosperity of the
                Future
              </p>
              <div className="flex gap-4 mt-12">
                <div className="border-white flex justify-center items-center rounded-full border-2 w-16 h-16 max-lg:w-10 max-lg:h-10">
                  <ArrowLeft className="font-bold text-[16px] lg:text-[24px] text-white" />
                </div>
                <div className="border-white rounded-full border-2 w-16 max-lg:w-10 max-lg:h-10 h-16 flex justify-center items-center">
                  <ArrowRight className="font-bold text-[16px] lg:text-[24px] text-white" />
                </div>
              </div>
            </div>
          </div>
          {/* Card and Article Section */}
          <CardArticle />
          {/* Surdu Section */}
          <div className="relative h-[500px] mt-32">
            <div className="bg-sustan h-[500px] bg-fixed flex flex-col justify-start bg-center bg-cover p-12 bg-no-repeat relative">
              <div className="absolute inset-0 bg-black/25">{}</div>
              <p className="relative font-medium overflow-hidden text-white text-[32px] lg:text-[64px]">
                Sürdürülebilirlik
              </p>
              <p className="text-white text-[16px] lg:text-[28px] mt-12 font-light relative ">
                Bu topraklardan doğan ve bu toprakların değerleriyle kendini
                şekillendiren Yıldızlar Yatırım Holding'in; bugüne kadar
                gerçekleştirdiği tüm faaliyetlerinin ana amacı insanımız ve
                insanlık için katma değer üretmektir.
              </p>
              <ChevronRight
                strokeWidth={3}
                color="white"
                className="relative w-8 lg:w-12 mt-20"
              />
            </div>
          </div>
          <HoriScroll />
          {/* Topragin Section */}
          <div className="bg-[#fefffe] w-full">
            <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-x-12 pt-16 px-4 lg:px-16">
              <div className="lg:w-2/5 w-full rounded-t-full bg-topragin1 bg-cover bg-no-repeat h-[500px]" />
              <div className="lg:w-3/5 w-full flex flex-col justify-between items-start h-[500px]">
                <p className="text-[#1c4734] text-[16px] lg:text-[32px] max-lg:py-6">Toprağın İzinde</p>
                <p className="text-[#1c4734] overflow-hidden text-[24px] lg:text-[72px] lg:leading-[80px]">
                  Potasyum Gübresi Nedir? | Çeşitleri ve
                </p>
                <p className="text-[#1c4734] font-thin text-[16px] lg:text-[24px]">
                  Tarımda verimliliği artırmak ve bitkilerin sağlıklı gelişimini
                  desteklemek için kullanılan gübreler, bitkilerin ihtiyaç
                  duyduğu besin maddelerinin toprağa sağlanmasını sağlar. Bu
                  gübrelerin başında po...
                </p>
                <button
                  className="bg-[#42ff00] max-lg:mb-4 group hover:gap-x-16 duration-300 ease-in-out transition-all hover:bg-[#2a6b4a] rounded-full px-4 lg:px-6 lg:py-5 py-2 flex justify-center items-center lg:gap-x-8 gap-x-4 "
                  type="button"
                >
                  <p className="text-[16px] lg:text-[24px] group-hover:text-white transition-all duration-300 ease-in-out">
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
          <Statistic />
        </div>
      </SmoothScrolling>
    </>
  );
}
