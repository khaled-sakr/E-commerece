// import { Link } from "react-router-dom";
// import HintH1 from "./HintH1";
// import HintHome from "./HintHome";
// import { GiBabyFace, GiFreedomDove } from "react-icons/gi";
// import { MdSportsScore } from "react-icons/md";
// const productFlash = [
//   {
//     categoryId: "1",
//     name: "palestine",
//   },
//   {
//     categoryId: "2",
//     name: "palestine",
//   },
//   {
//     categoryId: "3",
//     name: "palestine",
//   },
//   {
//     categoryId: "4",
//     name: "palestine",
//   },
//   {
//     categoryId: "5",
//     name: "palestine",
//   },
//   {
//     categoryId: "6",
//     name: "palestine",
//   },
//   {
//     categoryId: "7",
//     name: "palestine",
//   },
//   {
//     categoryId: "8",
//     name: "palestine",
//   },
//   {
//     categoryId: "9",
//     name: "palestine",
//   },
//   {
//     categoryId: "10",
//     name: "palestine",
//   },
//   {
//     categoryId: "11",
//     name: "palestine",
//   },
// ];
// function CategoriesHome() {
//   return (
//     // <div>
//     //   <HintHome>Categories</HintHome>
//     //   <div className="sm:w-9/12 h-fit mx-2 sm:mx-auto w-[95%] grid grid-flow-row overflow-hidden">
//     //     <HintH1>Browes By Categories</HintH1>
//     //     <div className="grid grid-flow-col sm:w-full mx-auto h-36 rounded-md mb-10 mt-2 overflow-x-scroll scrollInvisable justify-start p-1 space-x-5 ">
//     //       {productFlash.map((product) => (
//     //         <Link
//     //           to={`/category/:${product.id}`}
//     //           key={product.id}
//     //           className="md:w-[149px] sm:w-[130px] w-[100px]  px-5 py-4 my-auto h-[120px] border cursor-pointer rounded-sm hover:bg-red-500 text-black hover:text-white"
//     //         >
//     //           <MdSportsScore className="sm:text-4xl text-3xl mx-auto w-full" />
//     //           <span className="flex justify-center sm:text-sm text-xs py-3 font-[500]">
//     //             {product.name}
//     //           </span>
//     //         </Link>
//     //       ))}
//     //     </div>
//     //     <hr />
//     //   </div>
//     // </div>
//     <div>

//     </div>
//   );
// }

// export default CategoriesHome;

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
              {/* <MdSportsScore className="sm:text-4xl text-3xl mx-auto w-full" /> */}
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
