import Carousel from "react-multi-carousel";
import HintH1 from "./HintH1";
import HintHome from "./HintHome";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoMdHeart, IoMdStar, IoMdStarHalf } from "react-icons/io";
import { addItemFav, deleteItemFav } from "../features/favSlice";
import { useDispatch, useSelector } from "react-redux";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 6000, min: 1500 },
    items: 7,
  },
  LargeDesktop: {
    breakpoint: { max: 1600, min: 1500 },
    items: 6.25,
  },
  desktop: {
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
function FlashSales() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.favourite.products);
  return (
    <>
      <div className="flex flex-col">
        <HintHome>Today's</HintHome>
        <div className="sm:w-9/12 w-full mx-auto h-full flex-col-reverse flex">
          <Carousel
            className="mx-3 min-h-fit"
            responsive={responsive}
            arrows={false}
            renderButtonGroupOutside={true}
            enableSwipe={true}
            customButtonGroup={
              <HintH1
                // numberPros={` (${
                //   products.filter((product) => product.flash).length
                // })`}
                // for test 👉👉
                numberPros={` (${
                  products.filter((product) => product).length
                })`}
              >
                Flash Sales
              </HintH1>
            }
          >
            {products.map((product) => (
              // product.flash && (this is actual value but let's test)
              <div className="inline-block sm:w-44 w-36 overflow-hidden go">
                <div id="myBtn" className="sm:h-40 h-36 mb-4 overflow-hidden">
                  <span className="relative">
                    <Link
                      to={`/category/${product.categoryId}/product/${product.id}`}
                      className="overflow-hidden w-full"
                    >
                      <img
                        src={product.srcOne}
                        alt="palestine"
                        className="sm:h-40 sm:w-40 h-36 w-36 mx-auto rounded-md duration-500 overflow-hidden -mb-0 hover:-mb-[28px]"
                      />
                      <button className="hover:bg-stone-800  hover:absolute  bottom-0 block text-xs -translate-y-0 sm:w-40 w-36 m-auto h-7 ml-0 sm:ml-[8px] rounded-b-md text-white font-[300] bg-black overflow-hidden ">
                        Go To Product
                      </button>
                      <span className="absolute p-1 text-xs rounded-md top-2 left-0 w-9  text-center text-stone-100 font-[400] ml-3 border bg-red-500">
                        {product.discount}%
                      </span>
                    </Link>
                    {product.fav ? (
                      <button
                        onClick={() =>
                          dispatch(
                            deleteItemFav({
                              ...product,
                              id: product.id,
                              categoryId: product.categoryId,
                            })
                          )
                        }
                        className="absolute p-0 text-2xl rounded-md top-2 sm:right-4 right-2 text-center text-black font-[400] ml-8 bg-transparent"
                      >
                        <IoMdHeart className="text-[#ED4444] " />
                      </button>
                    ) : (
                      <button
                        onClick={() => dispatch(addItemFav({ ...product }))}
                        className="absolute p-0 text-2xl rounded-md top-2 sm:right-4 right-2 text-center text-black font-[400] ml-8 bg-transparent"
                      >
                        <CiHeart className="text-[#ED4444] " />
                      </button>
                    )}
                  </span>
                </div>
                <div className="sm:w-44 w-32 z-10 h-20 overflow-hidden">
                  <span className="m-auto">
                    <span className="block text-base text-start font-[500] ml-3 mb-1">
                      {product.name}
                    </span>
                    <span className="text-red-400 text-sm font-[500] sm:ml-3 start">
                      $
                      {product.price - product.price * (product.discount / 100)}
                    </span>
                    <span className="line-through text-sm text-stone-400 ml-2 sm:ml-3 font-[400]">
                      ${product.price}
                    </span>
                    <span className="flex text-yellow-500 sm:text-lg text-base mt-1 ">
                      {Array.apply(null, { length: product.stars }).map((i) => (
                        <span className="busterCards" key={i}>
                          <IoMdStar />
                        </span>
                      ))}
                      {Number(
                        (product.stars - Math.trunc(product.stars)).toFixed(2)
                      ) ? (
                        <IoMdStarHalf />
                      ) : (
                        ""
                      )}

                      <span className="text-slate-400 text-sm  ml-1">
                        ( {product.reviews} )
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <hr className="mx-auto sm:w-9/12 w-11/12 mt-9" />
      </div>
    </>
  );
}

export default FlashSales;
