import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import HintH1 from "./HintH1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useConFast } from "../Context/ContextProject";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 6000, min: 1500 },
    items: 7,
  },
  LargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 1600, min: 1500 },
    items: 6.25,
  },
  desktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 1500, min: 1250 },
    items: 5.75,
    partialVisibilityGutter: 40,
  },
  littleDesktop: {
    breakpoint: { max: 1250, min: 950 },
    items: 4,
  },
  largeTablet: {
    breakpoint: { max: 950, min: 830 },
    items: 3.5,
  },
  tablet: {
    breakpoint: { max: 830, min: 700 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 700, min: 640 },
    items: 2.7,
  },
  midMobile: {
    breakpoint: { max: 640, min: 600 },
    items: 3.5,
  },
  smallMobile4: {
    breakpoint: { max: 500, min: 450 },
    items: 2.7,
  },
  smallMobile3: {
    breakpoint: { max: 450, min: 400 },
    items: 2.5,
  },
  smallMobile2: {
    breakpoint: { max: 400, min: 300 },
    items: 2,
  },
  smallMobile1: {
    breakpoint: { max: 300, min: 0 },
    items: 1,
  },
};
function CategoriesHome() {
  const { categories } = useConFast();
  const [changeFav, setChangeFav] = useState(false);
  return (
    <>
      <div className="sm:w-9/12 w-full mx-auto h-full flex-col-reverse flex space-y-2">
        <Carousel
          className="mx-3"
          responsive={responsive}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<HintH1>Browse By Category</HintH1>}
        >
          {categories.map((category) => (
            <Link
              to={`/category/${category.categoryId}`}
              className="md:w-[149px] w-[120px] px-5 py-4 my-3 h-[110px] sm:h-[120px] inline-block cursor-pointer rounded-sm border hover:bg-red-500 text-black hover:text-white"
            >
              <FontAwesomeIcon
                icon={category.icon}
                className="sm:text-4xl text-3xl mx-auto w-full"
              />
              <span className="flex justify-center sm:text-sm text-xs py-3 font-[500]">
                {category.name}
              </span>
            </Link>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default CategoriesHome;
