import { FaPlus, FaStar } from "react-icons/fa6";
import { GiReturnArrow } from "react-icons/gi";
import { FaStarHalfAlt } from "react-icons/fa";
import { FiHeart, FiMinus } from "react-icons/fi";
import { PiVan } from "react-icons/pi";
import Category from "./Category";
import { useEffect, useState } from "react";
import AdressPage from "../ui/AdressPage";
import { useLocation, useParams } from "react-router-dom";
import { useConFast } from "../Context/ContextProject";
import { IoMdHeart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addItemAsync } from "../features/cartSlice";
import { Flip, toast } from "react-toastify";
import { CiHeart } from "react-icons/ci";
import { addItemFav, deleteItemFav } from "../features/favSlice";
function Product() {
  const { categoryId, productId } = useParams();
  // const {} = useConFast;
  const products = useSelector((state) => state.favourite.products);
  const cart = useSelector((state) => state.cart.cart);
  const location = useLocation();
  const product = products.find(
    (product) => product.id === productId && product.categoryId === categoryId
  );
  const {
    srcOne,
    srcTwo,
    srcThree,
    srcFour,
    price,
    discount,
    name,
    colors,
    fav,
  } = product;
  const dispatch = useDispatch();
  const [showImage, setShowImage] = useState(srcOne);
  useEffect(() => setShowImage(srcOne), [location]);
  const [num, setNum] = useState(1);
  const [color, setColor] = useState("black");
  const [size, setSize] = useState("M");
  function containsObject(obj, list) {
    let i;
    for (i = 0; i < list.length; i++) {
      if (
        list[i].id === obj.id &&
        list[i].categoryId === obj.categoryId &&
        list[i].color === color &&
        list[i].size === size
      ) {
        return true;
      }
    }

    return false;
  }
  console.log(containsObject(product, cart));
  // console.log(product, cart);
  // const cart = useSelector((state) => state.cart.cart);
  // console.log(cart, size, color, num);
  // function toastBuying() {
  //   useEffect(() => {
  //     const timeout = setTimeout(() => {
  //       toast.success(
  //         `${name} ,${color} color,${size} size has been added to the Cart`,
  //         {
  //           position: "top-right",
  //           autoClose: 3000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "colored",
  //           transition: Flip,
  //         }
  //       );
  //     }, 2000);
  //     timeout();
  //   }, []);
  // }
  // useEffect(
  //   () =>
  //     setTimeout(() => {
  //       toast.success(
  //         `${name} ,${color} color,${size} size has been added to the Cart`,
  //         {
  //           position: "top-right",
  //           autoClose: 3000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "colored",
  //           transition: Flip,
  //         }
  //       );
  //       setTimeout();
  //     }, time),
  //   []
  // );

  return (
    <>
      <AdressPage
        firstAddress="Home / shop / category /"
        secAddress=" Product"
      />
      <div className="flex md:flex-row flex-col sm:w-9/12 w-full mx-auto lg:mt-14 sm:mt-12 mt-10 justify-between">
        <span className="md:w-6/12 lg:w-7/12 w-11/12 flex md:mx-0 mx-auto">
          <p className="space-y-3 flex-col w-3/12 justify-between">
            <img
              src={srcOne}
              alt="t-shirt"
              className="w-[70%] cursor-pointer hover:border hover:border-black"
              onClick={() => setShowImage(srcOne)}
            />
            <img
              src={srcTwo}
              alt="t-shirt"
              className="w-[70%] cursor-pointer hover:border hover:border-black"
              onClick={() => setShowImage(srcTwo)}
            />{" "}
            <img
              src={srcThree}
              alt="t-shirt"
              className="w-[70%] cursor-pointer hover:border hover:border-black"
              onClick={() => setShowImage(srcThree)}
            />{" "}
            <img
              src={srcFour}
              alt="t-shirt"
              className="w-[70%] cursor-pointer hover:border hover:border-black"
              onClick={() => setShowImage(srcFour)}
            />
          </p>
          <img
            src={showImage}
            alt="t-shirt"
            className="w-8/12 lg:h-full md:h-96 h-fit"
          />
        </span>
        <span className="md:w-6/12 lg:w-5/12 w-[98%] md:mx-0 mx-auto md:mt-0 mt-9 flex flex-col">
          <h2 className="text-2xl font-[700]">{name}</h2>
          <p className="flex text-yellow-600   my-2 text-lg">
            <FaStar />
            <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
            <p className=" text-stone-400 text-sm ml-1">( 43 Reviews )</p>
            <p className="text-stone-500 text-sm ml-3">|</p>
            <span className="text-sm ml-4 text-green-400">In stock</span>
          </p>
          <div className="text-xl font-[500]">
            $ {price - price * (discount / 100)}
          </div>
          <div className="text-xs font-[400] mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis modi
            magni consectetur eos doloribus fugiat reiciendis.
          </div>
          <hr className="my-2 bg-stone-400 h-[2px]" />
          <div className="relative flex flex-col gap-2">
            <span className="text-lg ">Colors :</span>
            <span className="top-2 left-20 absolute space-x-2">
              {colors.map((col) => (
                <span className="bg-transparent inline-flex gap-3 relative ">
                  <button
                    onClick={() => setColor(col)}
                    className={`sm:w-5 w-4 sm:h-5 h-4 
                     bg-${
                       col === "white" ? "stone-400" : col
                     } inline-flex justify-center rounded-full`}
                  >
                    <span
                      className={`sm:w-3 w-2 absolute top-[4px] right-[4px] sm:h-3 m-auto h-2 rounded-full   sm:border-2 border
                      ${color === col ? "" : "bg-white"}`}
                    ></span>
                  </button>
                </span>
              ))}
            </span>

            <span className="flex gap-3 w-9/12 mt-3 mb-1 text-xs">
              <p className="text-lg">size:</p>
              <button
                onClick={() => setSize("XS")}
                className={`p-1 rounded-[4px] ${
                  size === "XS" && "bg-red-500 text-white border-transparent"
                } hover:text-white hover:border-transparent hover:bg-red-500 font-semibold border-stone-300 border w-7 h-7 mx-auto text-center `}
              >
                XS
              </button>
              <button
                onClick={() => setSize("S")}
                className={`p-1 rounded-[4px] ${
                  size === "S" && "bg-red-500 text-white border-transparent"
                } hover:text-white hover:border-transparent hover:bg-red-500 font-semibold border-stone-300 border w-7 h-7 mx-auto text-center `}
              >
                S
              </button>
              <button
                onClick={() => setSize("M")}
                className={`p-1 rounded-[4px] ${
                  size === "M" && "bg-red-500 text-white border-transparent"
                } hover:text-white hover:border-transparent hover:bg-red-500 font-semibold border-stone-300 border w-7 h-7 mx-auto text-center `}
              >
                M
              </button>
              <button
                onClick={() => setSize("L")}
                className={`p-1 rounded-[4px] ${
                  size === "L" && "bg-red-500 text-white border-transparent"
                } hover:text-white hover:border-transparent hover:bg-red-500 font-semibold border-stone-300 border w-7 h-7 mx-auto text-center `}
              >
                L
              </button>

              <button
                onClick={() => setSize("XL")}
                className={`p-1 rounded-[4px] ${
                  size === "XL" && "bg-red-500 text-white border-transparent"
                } hover:text-white hover:border-transparent hover:bg-red-500 font-semibold border-stone-300 border w-7 h-7 mx-auto text-center `}
              >
                XL
              </button>
            </span>
          </div>
          <span className="mt-4 flex w-full space-x-4">
            <span className="border-stone-300 rounded-[4px] flex w-5/12 font-semibold border">
              <button
                onClick={() => setNum(num > 1 ? num - 1 : 1)}
                className="text-lg hover:bg-red-500 hover:text-white border-stone-300  w-3/12 rounded-l-[4px]"
              >
                <FiMinus className="text-xs mx-auto" />
              </button>
              <p className="border-r border-l py-1 border-stone-300 w-6/12 text-center">
                {num}
              </p>
              <button
                onClick={() => setNum(num < 10 ? num + 1 : num)}
                className="after:content text-lg hover:bg-red-500 hover:text-white border-stone-300  w-3/12 rounded-r-[4px]"
              >
                <FaPlus className="text-xs mx-auto" />
              </button>
            </span>
            <button
              onClick={() => {
                if (!containsObject(product, cart)) {
                  dispatch(
                    addItemAsync({ ...product, size, color, amount: num })
                  );
                  setNum(1);
                  setColor("black");
                  setSize("M");
                  // toastBuying();
                } else {
                  console.log("alhamd llah");
                  toast.info(
                    `This product is exist in cart with same descriptions, if you want more go cart and increase number`,
                    {
                      position: "top-center",
                      autoClose: 3000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                      transition: Flip,
                    }
                  );
                }
              }}
              className="font-semibold border text-center text-sm w-4/12 my-auto px-4 py-2 rounded-[4px] hover:bg-red-500 hover:text-white border-stone-300"
            >
              Buy Now
            </button>
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
                className='font-semibold border text-center w-auto bg-white m-auto px-2 py-2 rounded-[4px] text-red-500 bg-white"
                } border-stone-300 hover:text-white hover:bg-[#ED4444]'
              >
                <IoMdHeart className="text-xl" />
              </button>
            ) : (
              <button
                onClick={() => dispatch(addItemFav({ ...product }))}
                className='font-semibold border text-center w-auto bg-white m-auto px-2 py-2 rounded-[4px] "hover:text-white text-black bg-white"
                 border-stone-300 hover:bg-[#ED4444] hover:text-white'
              >
                <CiHeart className=" text-xl " />
              </button>
            )}
          </span>
          <div className="flex-flex-col mt-4 border rounded-[4px]">
            <span className="h-20  border-b flex">
              <span className="w-3/12">
                <PiVan className="text-4xl text-center mx-auto mt-3" />
              </span>
              <span className="w-8/12">
                <h5 className="font-semibold text-sm py-2">Free Delivery</h5>
                <p className="text-xs">
                  Enter your postal code for Delivery Availability
                </p>
              </span>
            </span>
            <span className="h-20 flex">
              <span className="w-3/12">
                <GiReturnArrow className="text-3xl text-center mx-auto mt-4" />
              </span>
              <span className="w-8/12">
                <h5 className="font-semibold text-sm py-2">Return Delivery</h5>
                <p className="text-xs">Free 30 Days Delivery Return Details</p>
              </span>
            </span>
          </div>
        </span>
      </div>

      <Category withHint={false} anotherHint={"related Products"} />
    </>
  );
}

export default Product;
