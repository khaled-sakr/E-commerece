import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MoreHome from "./MoreHome";
import { useConFast } from "../Context/ContextProject";

// {
//   src: "../images/88A5E863-E59A-4034-A576-F33A9A71B036.webp",

//   title: "title-three",
//   name: "Spors",
//   id: 5,
// },
// {
//   src: "../images/88A5E863-E59A-4034-A576-F33A9A71B036.webp",

//   title: "title-three",
//   name: "Spors",
//   id: 6,
// },
// {
//   src: "../images/88A5E863-E59A-4034-A576-F33A9A71B036.webp",

//   title: "title-three",
//   name: "Spors",
//   id: 7,
// },
// {
//   src: "../images/88A5E863-E59A-4034-A576-F33A9A71B036.webp",

//   title: "title-three",
//   name: "Spors",
//   id: 8,
// },
// {
//   src: "../images/88A5E863-E59A-4034-A576-F33A9A71B036.webp",

//   title: "title-three",
//   name: "Spors",
//   id: 9,
// },
// {
//   src: "../images/88A5E863-E59A-4034-A576-F33A9A71B036.webp",

//   title: "title-three",
//   name: "Spors",
//   id: 12,
// },
// {
//   src: "../images/88A5E863-E59A-4034-A576-F33A9A71B036.webp",

//   title: "title-three",
//   name: "Spors",
//   id: 12,
// },
// {
//   src: "../images/88A5E863-E59A-4034-A576-F33A9A71B036.webp",

//   title: "title-three",
//   name: "Spors",
//   id: 12,
// },
// {
//   src: "../images/88A5E863-E59A-4034-A576-F33A9A71B036.webp",

//   title: "title-three",
//   name: "Spors",
//   id: 12,
// },
// {
//   src: "../images/88A5E863-E59A-4034-A576-F33A9A71B036.webp",

//   title: "title-three",
//   name: "Spors",
//   id: 12,
// },
// {
//   src: "../images/88A5E863-E59A-4034-A576-F33A9A71B036.webp",
//   title: "title-three",
//   name: "Spors",
//   id: 12,
// },
function ProductHomeFlash() {
  const { products } = useConFast();
  return (
    <>
      <div className="grid grid-flow-col gap-3 justify-start h-60 w-full scrollInvisable bg-white overflow-x-scroll overflow-y-hidden">
        {products.map((product) => (
          <div className="inline-block w-44 overflow-hidden go">
            <div id="myBtn" className="h-40 mb-4 overflow-hidden">
              <Link
                to={`/product/:${product.id}`}
                className="overflow-hidden w-full relative"
              >
                <img
                  src={product.srcOne}
                  alt="palestine"
                  className="h-40 w-40 mx-auto rounded-md  duration-500 overflow-hidden -mb-0 hover:-mb-[28px]"
                />
                <button className="hover:bg-stone-800  hover:absolute  bottom-0 block text-xs -translate-y-0 w-40 m-auto h-7 ml-[8px] rounded-b-md text-white font-[300] bg-black overflow-hidden ">
                  Go To Product
                </button>
                <span className="absolute p-1 text-xs rounded-md top-2 right-4 text-center text-stone-100 font-[400] ml-8 border bg-red-500">
                  75%
                </span>
              </Link>
            </div>
            <div className="w-44 z-10 h-14 overflow-hidden">
              <span className="m-auto">
                <span className="block text-base text-center font-[500] ml-3 mb-1">
                  Anime Etatche
                </span>
                <span className="text-red-400 text-sm font-[500] ml-9">
                  $300
                </span>
                <span className="line-through text-sm text-stone-400 font-[400] ml-12">
                  $1200
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductHomeFlash;
