import { Link } from "react-router-dom";
import AdressPage from "../ui/AdressPage";
import ProductInCart from "../ui/ProductInCart";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { applicationCouponAsync } from "../features/cartSlice";
import { Flip, toast } from "react-toastify";
import { useConFast } from "../Context/ContextProject";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const price = useSelector((state) => state.cart.price);
  const coupon = useSelector((state) => state.cart.coupon);
  const { couponCart, setCouponCart, discountCoupon } = useConFast();
  const dispatch = useDispatch();
  function onSubmitCoupon() {
    if (+couponCart === +discountCoupon) {
      dispatch(applicationCouponAsync());
      setCouponCart("");
    } else {
      setCouponCart("");
      toast.error(`I am sorry the coupon is unvalid!`, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
    }
  }
  return cart.length ? (
    <div>
      <AdressPage firstAddress="Home/" secAddress=" Cart" />

      <div className="sm:w-[70%] space-y-1 w-11/2 mx-auto my-9 flex flex-col ">
        <div className="w-full">
          <div className="w-[98%] mx-auto h-16 flex py-5 sm:text-sm text-xs font-semibold  shadow-sm ">
            <span className="w-4/12">Product</span>
            <span className="w-4/12">Price</span>
            <span className="w-3/12 lg:pl-2">Quantity</span>
            <span className="w-2/12 ">Subtotal</span>
          </div>
          {cart.map((product) => (
            <ProductInCart
              product={product}
              key={
                product.id + product.categoryId + product.color + product.size
              }
            />
          ))}
        </div>
      </div>
      <span className="sm:w-[70%] w-[98%] mx-auto flex mt-9 justify-between">
        <Link
          to="/shop"
          className="border inline-block lg:w-3/12 sm:w-4/12 xs:w-4/12 w-4/12 px-3 py-2 md:text-sm sm:text-xs xs:text-[12px] text-[10px]  font-[500] border-slate-300 text-center bg-transparent hover:bg-[#DB4444] hover:text-white"
        >
          Return To Shop
        </Link>
        <Link
          to="/favourite"
          className="border inline-block lg:w-3/12 sm:w-4/12 xs:w-4/12  w-4/12  px-3 py-2 md:text-sm sm:text-xs xs:text-[12px] text-[10px]  border-slate-300 text-center bg-transparent hover:bg-[#DB4444] hover:text-white font-[500]"
        >
          Go To Favourite
        </Link>
      </span>
      <div className="sm:w-[70%] w-[98%] mx-auto sm:flex flex-row my-12 justify-between">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitCoupon();
          }}
          className="sm:w-6/12 w-full sm:mx-0 mx-auto flex flex-col"
        >
          <p className="flex gap-2">
            <input
              type="text"
              value={couponCart}
              onChange={(e) => setCouponCart(e.target.value)}
              className={`sm:w-6/12 md:w-7/12 xs:w-5/12 w-6/12 outline-none border border-slate-400 text-xs px-3 lg:py-2.5 py-1.5 lg:placeholder:text-sm placeholder:text-xs ${
                coupon === 1 ? "" : "cursor-not-allowed"
              }`}
              placeholder={`${
                coupon === 1
                  ? ` coupon code Enter 1234 😉`
                  : "discount has been apllyed"
              } `}
              disabled={coupon === 1 ? false : true}
            />
            <input
              onClick={(e) => {
                e.preventDefault();
                onSubmitCoupon();
              }}
              disabled={coupon === 1 ? false : true}
              type="submit"
              className={`md:w-4/12 sm:w-5/12 xs:w-3/12 w-4/12 text-xs bg-[#DB4444] hover:bg-red-600 text-white lg:py-2.5 py-1.5 xs:px-1 px-3 font-semibold ${
                coupon === 1 ? "cursor-pointer" : "cursor-not-allowed"
              }`}
              value="Add Coupon"
            />
          </p>
          <p
            className={`${
              coupon === 1 ? "invisible" : "visible"
            } w-full sm:mx-3 mx-auto md:text-sm sm:mt-2 mt-1 xs:text-[11px] text-[9px] text-[#00f829] font-semibold`}
          >
            Your discount had been applyed
          </p>
        </form>
        <span className="sm:w-[50%] lg:w-[40%] w-full sm:mt-0 mt-4 flex flex-col justify-between border h-54 p-3 sm:text-xs xs:text-[12px] text-[11px] border-slate-500">
          <h3 className="text-sm font-semibold">Cart Total</h3>
          <span className="flex justify-between border-b py-4">
            <p className="font-semibold"> subtotal :</p>
            <p className="text-slate-400">${price}</p>
          </span>{" "}
          {coupon !== 1 ? (
            <span className="flex justify-between border-b py-4 text-[#00f829]">
              <p className="font-semibold"> coupon :</p>
              <p>- ${price}</p>
            </span>
          ) : (
            ""
          )}
          <span className="flex justify-between border-b py-4 text-[#DB4444]">
            <p className="font-semibold"> shipping :</p>
            <p>+ $20</p>
          </span>{" "}
          <span className="flex justify-between  py-4">
            <p className="font-semibold"> subtotal :</p>
            <p className="text-slate-400">${price + 20}</p>
          </span>
          <Link
            to="/checkout"
            className="border px-3 py-2  text-xs font-semibold border-slate-300 text-center bg-[#DB4444] hover:bg-red-600  text-white"
          >
            Procces To Checkout
          </Link>
        </span>
      </div>
    </div>
  ) : (
    <div className="sm:w-9/12 sm:mt-20 mt-10 flex flex-col justify-between h-full gap-11 text-center w-full sm:mx-auto mx-auto px-6 sm:px-0">
      <PiShoppingCartSimpleFill className="bg-stone-200 text-[#4c4949] border md:text-8xl text-7xl p-2 md:p-3 rounded-full mx-auto" />
      <p className="md:text-2xl sm:text-xl text-base text-stone-600">
        Cart is empty!
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

export default Cart;
