// import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
// import { FiSearch } from "react-icons/fi";
// import { Link } from "react-router-dom";
// const products = [
//   {
//     src: "/images/88A5E863-E59A-4034-A576-F33A9A71B036.webp",
//     title: "title-three",
//     name: "Anime Etatche",
//     price: 100,
//     fav: true,
//     id: 1,
//     categoryId: 1,
//     FlashSale: true,
//     inHome: true,
//   },
//   {
//     src: "/images/88A5E863-E59A-4034-A576-F33A9A71B036.webp",
//     title: "title-three",
//     name: "Anime Etatche",
//     price: 200,
//     fav: false,
//     id: 1,
//     categoryId: 2,
//     inHome: false,
//     FlashSale: false,
//   },
//   {
//     src: "/images/88A5E863-E59A-4034-A576-F33A9A71B036.webp",
//     title: "title-three",
//     name: "Anime Etatche",
//     price: 300,
//     fav: false,
//     id: 1,
//     categoryId: 3,
//     FlashSale: false,
//     inHome: false,
//   },
//   {
//     src: "/images/88A5E863-E59A-4034-A576-F33A9A71B036.webp",
//     title: "title-three",
//     name: "Anime Etatche",
//     price: 400,
//     fav: false,
//     id: 1,
//     categoryId: 4,
//     FlashSale: false,
//     inHome: false,
//   },
//   {
//     src: "/images/88A5E863-E59A-4034-A576-F33A9A71B036.webp",
//     title: "title-three",
//     name: "Anime Etatche",
//     price: 500,
//     fav: true,
//     id: 1,
//     categoryId: 5,
//     FlashSale: false,
//     inHome: false,
//   },
//   {
//     src: "/images/88A5E863-E59A-4034-A576-F33A9A71B036.webp",
//     title: "title-three",
//     name: "Anime Etatche",
//     price: 600,
//     fav: false,
//     id: 1,
//     categoryId: 6,
//     FlashSale: false,
//     inHome: false,
//   },
//   ,
//   {
//     src: "/images/88A5E863-E59A-4034-A576-F33A9A71B036.webp",
//     title: "title-three",
//     name: "Anime Etatche",
//     price: 700,
//     fav: false,
//     id: 1,
//     categoryId: 7,
//     FlashSale: false,
//     inHome: false,
//   },
// ];
// function HeaderAuth() {
//   return (
//     <div className="mx-auto sm:flex hidden w-9/12 h-[80px] pr-2">
//       <div className=" lg:w-2/12 w-[18%]">
//         <Link to="/" className="inline">
//           <span className="inline-block font-[600] md:pt-9 pt-12 md:text-2xl text-base">
//             T-Empire
//           </span>
//         </Link>
//       </div>
//       <div className="flex justify-between w-[35%] md:w-[30%] xl:text-base lg:text-sm text-xs mx-auto md:pt-10 pt-12 font-[500]">
//         <Link to="/" className={`${hover}${pathname === "/" && active}`}>
//           <span>Home</span>
//         </Link>
//         <Link
//           to="/contact"
//           className={`${hover}${pathname === "/contact" && active}`}
//         >
//           <span>Contact</span>
//         </Link>
//         <Link
//           to="/about"
//           className={`${hover}${pathname === "/about" && active}`}
//         >
//           <span>About</span>
//         </Link>
//         <Link
//           to="/signup"
//           className={`${hover}${pathname === "/signup" && active}`}
//         >
//           <span>Signup</span>
//         </Link>
//       </div>
//       <form className="relative w-3/12">
//         <input
//           name="search"
//           id="search"
//           type="text"
//           className="bg-stone-100 rounded-md outline-none text-xs md:p-4 p-2  md:mt-9 mt-11 md:h-8 h-7 w-11/12 lg:placeholder:text-[10px] md:placeholder:text-[8px] placeholder:text-[7px] placeholder:font-[400]"
//           placeholder="What are you looking for"
//         />
//         <label for="search">
//           <FiSearch className="absolute bg-stone-100 md:h-[32px] h-[28px] md:top-9 top-11 right-0 w-9 p-2 cursor-pointer hover:text-stone-700  text-xl rounded-md " />
//         </label>
//       </form>
//       <div className="inline-flex md:w-1/12 w-2/12 justify-between">
//         <Link
//           to="/favourite"
//           className="cursor-pointer mx-auto relative hover:text-stone-500"
//         >
//           <AiOutlineHeart
//             display={pathname === "/favourite"}
//             className="lg:text-2xl text-lg md:mt-10 mt-12 "
//           />
//           {/* <span className="absolute -right-1 top-[42px] md:top-8 text-stone-100 lg:w-[14px] lg:h-[14px] w-[11px] h-[11px] md:w-[12px] md:h-[12px] opacity-95 text-[8px] md:text-[9px] text-center m-auto rounded-full bg-red-500">
//             1
//           </span> */}
//         </Link>
//         <Link
//           to="/cart"
//           className="cursor-pointer relative hover:text-stone-500"
//         >
//           <AiOutlineShoppingCart className="lg:text-2xl text-lg md:mt-10 mt-12" />
//           <span className="absolute -right-1 top-[42px] md:top-8 text-stone-100 lg:w-[14px] lg:h-[14px] w-[11px] h-[11px] md:w-[12px] md:h-[12px] opacity-95 text-[8px] md:text-[9px] text-center m-auto rounded-full bg-red-500">
//             1
//           </span>
//         </Link>{" "}
//         <Link
//           to="/cart"
//           className="cursor-pointer relative hover:text-stone-500"
//         >
//           <AiOutlineShoppingCart className="lg:text-2xl text-lg md:mt-10 mt-12" />
//           <span className="absolute -right-1 top-[42px] md:top-8 text-stone-100 lg:w-[14px] lg:h-[14px] w-[11px] h-[11px] md:w-[12px] md:h-[12px] opacity-95 text-[8px] md:text-[9px] text-center m-auto rounded-full bg-red-500">
//             1
//           </span>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default HeaderAuth;
function HeaderAuth() {
  return <div></div>;
}

export default HeaderAuth;
