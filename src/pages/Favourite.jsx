import { IoMdStar } from "react-icons/io";
import { TbShoppingCartHeart } from "react-icons/tb";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { MdOutlineDeleteForever } from "react-icons/md";
import AdressPage from "../ui/AdressPage";
import { useDispatch, useSelector } from "react-redux";
import { Flip, toast } from "react-toastify";
import { deleteItemFav } from "../features/favSlice";
function Favourite() {
  const dispatch = useDispatch();
  const favourite = useSelector((state) => state.favourite.favourite);
  const cart = useSelector((state) => state.favourite.cart);
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
                <span className="block">
                  $ {product.price - product.price * (product.discount / 100)}
                </span>
              </div>
            </span>
            <span className="md:w-3/12 w-full py-2 flex md:flex-col flex-row justify-center gap-2">
              <Link
                onClick={() =>
                  toast.info(`please choose your description`, {
                    position: "top-left",
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
