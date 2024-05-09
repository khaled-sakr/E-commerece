import { IoMdStar } from "react-icons/io";
import { BsBagHeart } from "react-icons/bs";
import { TbShoppingCartHeart } from "react-icons/tb";
import { Link } from "react-router-dom";
import { GiShoppingBag, GiShoppingCart } from "react-icons/gi";
import { MdDeleteForever, MdOutlineDeleteForever } from "react-icons/md";
import AdressPage from "../ui/AdressPage";
import { useConFast } from "../Context/ContextProject";
import { useDispatch, useSelector } from "react-redux";
import { addItemAsync } from "../features/cartSlice";
import { Flip, toast } from "react-toastify";
import { deleteItemFav } from "../features/favSlice";
function Favourite() {
  const dispatch = useDispatch();
  const favourite = useSelector((state) => state.favourite.favourite);
  const cart = useSelector((state) => state.favourite.cart);
  // function containsObject(obj, list) {
  //   let i;
  //   for (i = 0; i < list.length; i++) {
  //     if (
  //       list[i].id === obj.id &&
  //       list[i].categoryId === obj.categoryId &&
  //       list[i].color === "black" &&
  //       list[i].size === "M"
  //     ) {
  //       return true;
  //     }
  //   }

  //   return false;
  // }
  ///////////////////////////////
  ///////////////////////////////
  ///////////////////////////////
  ///////////////////////////////
  ///////////////////////////////
  ///////////////////////////////
  return favourite.length ? (
    <div>
      <AdressPage firstAddress="Home /" secAddress=" favourite" />
      <h3 className="sm:w-9/12 w-11/12 mx-auto mb-6 font-semibold text-2xl lg:mt-14 sm:mt-8 mt-5">
        Favourite Products ({favourite.length})
      </h3>
      <div className="sm:w-[70%] w-11/2 mx-auto my-9 space-y-2">
        {favourite.map((product) => (
          <div className="flex md:flex-row flex-col justify-between  px-2 border-b mb-4 pb-4">
            <span className="md:w-8/12 w-full h-32 text-sm py-2 flex">
              <Link
                to={`/category/${product.categoryId}/product/${product.id}`}
                className="flex"
              >
                <img
                  src={product.srcOne}
                  alt={product.name}
                  className="w-28 mr-3 justify-center"
                />{" "}
              </Link>
              <div className="flex flex-col gap-4">
                <Link
                  to={`/category/${product.categoryId}/product/${product.id}`}
                  className="inline"
                >
                  <span className="block my-auto hover:text-slate-700 hover:underline">
                    {product.name} Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit.
                  </span>
                </Link>{" "}
                <span className="flex text-yellow-500 text-xl">
                  <IoMdStar className="" />
                  <IoMdStar className="" />
                  <IoMdStar className="" />
                  <IoMdStar className="" />
                  <IoMdStar className="" />

                  <span className="text-slate-400 text-sm ml-2">(54)</span>
                </span>
                <span className="block">${product.price}</span>
              </div>
            </span>
            <span className="md:w-3/12 w-full py-2 flex md:flex-col flex-row justify-center gap-2">
              <Link
                onClick={() =>
                  toast.info(`please choose your description`, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Flip,
                  })
                }
                to={`/category/${product.categoryId}/product/${product.id}`}
                className="shadow-md md:py-2 lg:py-3 py-1 border-[1.5px] md:px-0 px-3 bg-transparent text-sm font-[500] rounded-[4px] border-slate-300 text-center bg-transprent  hover:bg-[#DB4444] hover:text-white"
              >
                Buy Now
                <GiShoppingCart className="text-lg ml-2 inline-block" />
              </Link>
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
                className="md:py-2 lg:py-3 py-1 md:px-0 px-3 text-sm font-[500] border-slate-300 rounded-[4px] text-center  hover:bg-slate-300 bg-transparent"
              >
                Remove
                <MdOutlineDeleteForever className="text-xl ml-2 inline-block" />
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="sm:w-9/12 sm:mt-20 mt-10 flex flex-col justify-between h-full gap-11 text-center w-full sm:mx-auto mx-auto px-6 sm:px-0">
      <TbShoppingCartHeart className="bg-stone-200 text-[#4c4949] border md:text-8xl text-7xl p-2 md:p-3 rounded-full mx-auto" />
      <p className="md:text-2xl sm:text-xl text-base text-stone-600">
        favourite is empty!
      </p>
      <Link
        to="/shop"
        className="sm:w-4/12 w-5/12 md:w-3/12 mx-auto lg:text-xl sm:text-base xs:text-sm text-xs text-white py-2 hover:bg-[#c43f3f] bg-[#DB4444] font-semibold rounded-md"
      >
        Go To Shop
      </Link>
    </div>
  );
}

export default Favourite;

//   <div>
//   <h3 className="sm:w-9/12 w-11/12 text-stone-500 md:text-xs sm:text-[10px] text-[8px] mx-auto pt-8 md:pt-10 lg:pt-12">
//     Home / <p className="font-bold inline-block text-black">Cart</p>
//   </h3>

//   <div className="sm:w-[70%] space-y-1 w-11/2 mx-auto my-9 flex flex-col ">
//     <div className="w-full">
//       <div className="w-[98%] mx-auto h-16 flex py-5 sm:text-sm text-xs font-semibold  shadow-sm ">
//         <span className="w-4/12">Product</span>
//         <span className="w-4/12">Price</span>
//         <span className="w-3/12 lg:pl-2">Quantity</span>
//         <span className="w-2/12 ">Subtotal</span>
//       </div>
//       <div
//         to="/product/:2"
//         className="w-full mt-8 h-16 flex justify-between text-sm  py-4  "
//       >
//         <span className="w-4/12 space-x-2">
//           <img
//             src="../images/88A5E863-E59A-4034-A576-F33A9A71B036.webp"
//             alt="t-shirt"
//             className="w-9 inline ml-1"
//           />
//           <Link
//             to="/product/:4"
//             className="lg:text-sm text-xs relative after:absolute after:w-0 after:duration-300 hover:after:w-full after:h-[1px] after:left-0 after:bg-black after:top-5 cursor-pointer"
//           >
//             T-shirt
//           </Link>
//         </span>
//         <span className="w-4/12 pt-2 lg:text-sm text-xs">100$</span>
//         <span className="w-3/12 pt-2 z-10 lg:text-sm text-xs">
//           <p className="flex justify-between border-stone-300 border md:w-5/12 xs:w-6/12 w-8/12 rounded-[3px]">
//             <button
//               className="sm:text-base text-[12px] border-r hover:bg-stone-200"
//               onClick={() => setNumPro(numPro > 1 ? numPro - 1 : 1)}
//             >
//               <MdOutlineKeyboardArrowLeft />
//             </button>
//             <span className="lg:text-sm sm:text-[12px] text-[12px]">
//               {numPro}
//             </span>
//             <button
//               className="sm:text-base text-[12px] border-l hover:bg-stone-200"
//               onClick={() => setNumPro(numPro < 10 ? numPro + 1 : numPro)}
//             >
//               <MdOutlineKeyboardArrowRight className="" />
//             </button>
//           </p>
//         </span>
//         <span className="w-2/12 pt-2 pl-3 lg:text-sm text-xs">200$</span>
//       </div>{" "}
//       <div
//         to="/product/:2"
//         className="w-full mt-8 h-16 flex justify-between text-sm  py-4  "
//       >
//         <span className="w-4/12 space-x-2">
//           <img
//             src="../images/88A5E863-E59A-4034-A576-F33A9A71B036.webp"
//             alt="t-shirt"
//             className="w-9 inline ml-1"
//           />
//           <Link
//             to="/product/:4"
//             className="lg:text-sm text-xs relative after:absolute after:w-0 after:duration-300 hover:after:w-full after:h-[1px] after:left-0 after:bg-black after:top-5 cursor-pointer"
//           >
//             T-shirt
//           </Link>
//         </span>
//         <span className="w-4/12 pt-2 lg:text-sm text-xs">100$</span>
//         <span className="w-3/12 pt-2 z-10 lg:text-sm text-xs">
//           <p className="flex justify-between border-stone-300 border md:w-5/12 xs:w-6/12 w-8/12 rounded-[3px]">
//             <button
//               className=" sm:text-base text-[12px] border-r hover:bg-stone-200"
//               onClick={() => setNumPro(numPro > 1 ? numPro - 1 : 1)}
//             >
//               <MdOutlineKeyboardArrowLeft />
//             </button>
//             <span className="lg:text-sm sm:text-[12px] text-[12px]">
//               {numPro}
//             </span>
//             <button
//               className=" sm:text-base text-[12px] border-l hover:bg-stone-200"
//               onClick={() => setNumPro(numPro < 10 ? numPro + 1 : numPro)}
//             >
//               <MdOutlineKeyboardArrowRight />
//             </button>
//           </p>
//         </span>
//         <span className="w-2/12 pt-2 pl-3 lg:text-sm text-xs">200$</span>
//       </div>
//     </div>
//     {/* <div className="w-full flex">
//       <span className="w-6/12 bg-red-900 ">b</span>
//       <div className="w-6/12 bg-red-200">c</div>
//     </div> */}
//   </div>
//   <span className="sm:w-[70%] w-[98%] mx-auto flex mt-9 justify-between">
//     <Link
//       to="/shop"
//       className="border inline-block lg:w-3/12 sm:w-4/12 xs:w-3/12 w-4/12 px-3 py-2 md:text-sm sm:text-xs xs:text-[12px] text-[8px]  font-[500] border-slate-300 text-center bg-transparent hover:bg-[#DB4444] hover:text-white"
//     >
//       Return To Shop
//     </Link>
//     <Link
//       to="/favourite"
//       className="border inline-block lg:w-3/12 sm:w-4/12 xs:w-3/12 w-4/12  px-3 py-2 md:text-sm sm:text-xs xs:text-[12px] text-[8px]  border-slate-300 text-center bg-transparent hover:bg-[#DB4444] hover:text-white font-[500]"
//     >
//       Go To Favourite
//     </Link>
//   </span>
// </div>
