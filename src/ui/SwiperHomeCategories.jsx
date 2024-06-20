import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import { GiChemicalArrow } from "react-icons/gi";
import { useRef } from "react";
const sliderImages = [
  {
    src: "../../images/new-back.jpg",
    title: "title-two",
    name: "title-two",
  },
  {
    src: "../../images/new-back.jpg",
    title: "title-one",
    name: "title-one",
  },
  {
    src: "../../images/new-back.jpg",
    title: "title-three",
    name: "title-three",
  },
  {
    src: "../../images/new-back.jpg",
    title: "title-two",
    name: "title-two",
  },
  {
    src: "../../images/new-back.jpg",
    title: "title-one",
    name: "title-one",
  },
  {
    src: "../../images/new-back.jpg",
    title: "title-three",
    name: "title-three",
  },
];
function SwiperHomeCategories() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <div
        ref={progressCircle}
        className="autoplay-progress "
        slot="container-end "
      >
        <span ref={progressContent} className="hidden"></span>
      </div>
      <div className=" lg:w-[83%] sm:w-[79%] w-[95%] mx-auto">
        <Swiper
          style={{
            "--swiper-pagination-color": "#DB4444",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
          }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper w-full mt-2 h-fit "
        >
          {sliderImages.map((slider) => (
            <SwiperSlide className="bg-transparent relative " key={slider.src}>
              <img src={slider.src} alt={"slider.title"} />
              <Link to="/shop">
                <button className="inline absolute md:bottom-[20%] lg:bottom-[20%] bottom-[22%] xl:left-[-3%] md:left-[-5%] sm:left-[-13%]  xs:left-[-5%] left-[-10%]  translate-x-2/4 opacity-90 hover:opacity-100 lg:px-6 md:px-2 sm:px-6 px-4 py-0 sm:py-1 rounded-md md:font-[600] font-base xl:text-base lg:text-sm md:text-xs xs:text-[0.5rem] text-[6px] sm:text-[9px] text-stone-300 hover:text-stone-400">
                  shop now
                  <GiChemicalArrow className="inline ml-1 md:text-base mb-[2px] text-xs" />
                </button>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default SwiperHomeCategories;
