import { useState } from "react";
import { Link } from "react-router-dom";
import AdressPage from "../ui/AdressPage";
import { useDispatch, useSelector } from "react-redux";
import { useConFast } from "../Context/ContextProject";
import { applicationCouponAsync, clearCart } from "../features/cartSlice";
import { Flip, toast } from "react-toastify";

function Checkout() {
  const cart = useSelector((state) => state.cart.cart);
  const price = useSelector((state) => state.cart.price);
  const coupon = useSelector((state) => state.cart.coupon);
  const users = useSelector((state) => state.user.user);
  const [paymentDel, setPaymentDel] = useState(false);
  const { couponCart, setCouponCart, discountCoupon, setdetailsShow } =
    useConFast();
  const dispatch = useDispatch();
  function onSubmitCoupon() {
    if (+couponCart === +discountCoupon) {
      dispatch(applicationCouponAsync());
      setCouponCart("");
      toast.success(`The Coupojn was applyed!`, {
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
  return (
    <>
      <AdressPage
        firstAddress="Account / My account / Product / View Cart /"
        secAddress=" CheckOut"
      />
      <div className="sm:w-9/12 w-full flex md:flex-row flex-col lg:justify-around justify-between mx-auto lg:mt-14 sm:mt-8 mt-5">
        <form className="flex-col lg:w-5/12 md:w-6/12 w-[90%] md:mx-0 mx-auto flex justify-between">
          <h1 className="text-3xl font-semibold mb-2">Billing Details</h1>
          <span className="space-y-1 my-2">
            <label
              htmlFor="firstName"
              className="xs:text-xs text-[11px] text-stone-400"
            >
              Frist Name
            </label>
            <input
              disabled
              value={users[0].firstName}
              type="text"
              placeholder="khaled"
              className="placeholder:text-xs sm:placeholder:text-sm w-full sm:h-9 h-7 bg-stone-100 rounded-[3px] outline-none text-xs sm:p-3 p-2"
            />
          </span>{" "}
          <span className="space-y-1 my-2">
            <label
              htmlFor="firstName"
              className="xs:text-xs text-[11px] text-stone-400"
            >
              Last Name
            </label>
            <input
              disabled
              value={users[0].lastName}
              type="text"
              placeholder="sakr"
              className="placeholder:text-xs sm:placeholder:text-sm w-full sm:h-9 h-7 bg-stone-100 rounded-[3px] outline-none text-xs sm:p-3 p-2"
            />
          </span>{" "}
          <span className="space-y-1 my-2">
            <label
              htmlFor="firstName"
              className="xs:text-xs text-[11px] text-stone-400"
            >
              Company Name
            </label>
            <input
              disabled
              value={users[0].address.companyName}
              placeholder="elmoqawloane elarab"
              type="text"
              className="placeholder:text-xs sm:placeholder:text-sm w-full sm:h-9 h-7 bg-stone-100 rounded-[3px] outline-none text-xs sm:p-3 p-2"
            />
          </span>{" "}
          <span className="space-y-1 my-2">
            <label
              htmlFor="firstName"
              className="xs:text-xs text-[11px] text-stone-400"
            >
              Street Address
            </label>
            <input
              disabled
              value={users[0].address.streetAddress}
              placeholder="central street"
              type="text"
              className="placeholder:text-xs sm:placeholder:text-sm w-full sm:h-9 h-7 bg-stone-100 rounded-[3px] outline-none text-xs sm:p-3 p-2"
            />
          </span>{" "}
          <span className="space-y-1 my-2">
            <label
              htmlFor="firstName"
              className="xs:text-xs text-[11px] text-stone-400"
            >
              Apartment ,floor ,etc(optional)
            </label>
            <input
              disabled
              value={users[0].address.governorate}
              placeholder="baqllola city"
              type="text"
              className="placeholder:text-xs sm:placeholder:text-sm w-full sm:h-9 h-7 bg-stone-100 rounded-[3px] outline-none text-xs sm:p-3 p-2"
            />
          </span>{" "}
          <span className="space-y-1 my-2">
            <label
              htmlFor="firstName"
              className="xs:text-xs text-[11px] text-stone-400"
            >
              Town/City
            </label>
            <input
              disabled
              value={users[0].address.cityOrTown}
              placeholder="baqllola /elsanta"
              type="text"
              className="placeholder:text-xs sm:placeholder:text-sm w-full sm:h-9 h-7 bg-stone-100 rounded-[3px] outline-none text-xs sm:p-3 p-2"
            />
          </span>{" "}
          <span className="space-y-1 my-2">
            <label
              htmlFor="firstName"
              className="xs:text-xs text-[11px] text-stone-400"
            >
              Phone Number
            </label>
            <input
              disabled
              value={users[0].phone}
              placeholder="+201028577310"
              type="text"
              className="placeholder:text-xs sm:placeholder:text-sm w-full sm:h-9 h-7 bg-stone-100 rounded-[3px] outline-none text-xs sm:p-3 p-2"
            />
          </span>{" "}
          <span className="space-y-1 my-2">
            <label
              htmlFor="firstName"
              className="xs:text-xs text-[11px] text-stone-400"
            >
              Email Address
            </label>
            <input
              disabled
              value={users[0].email}
              placeholder="khaledsakr12345@gmail.com"
              type="email"
              className="placeholder:text-xs sm:placeholder:text-sm w-full sm:h-9 h-7 bg-stone-100 rounded-[3px] outline-none text-xs sm:p-3 p-2"
            />
          </span>
          <span className="space-y-1 my-4 h-16 space-x-3 pb-3 relative">
            <Link
              onClick={() => setdetailsShow(false)}
              to="/account"
              className="mt-5 float-right text-sm border-stone-400 px-3 py-2 hover:text-white hover:bg-red-600 border-2 font-[500] top-0 left-3 "
            >
              Edit Details
            </Link>
          </span>
        </form>
        <div className="lg:w-4/12 md:w-5/12 w-[92%] mx-auto flex flex-col md:pt-20 sm:pt-5 pt-0 sm:mx-2">
          <div className=" sm:text-sm text-xs flex flex-col mb-4 gap-4">
            {cart.map((product) => (
              <div className="h-12 hover:bg-ston e-100 flex justify-between font-semibold ">
                <img
                  src={product.srcOne}
                  alt="t-shirt"
                  className="h-full mr-2"
                />
                <Link
                  to={`/category/${product.categoryId}/product/${product.id}`}
                  className="mt-3 hover:underline"
                >
                  T-shirt with details
                </Link>
                <span className="flex-1 justify-end flex mt-3 ">
                  $
                  {(product.price - (product.price * product.discount) / 100) *
                    product.amount}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:text-sm text-xs font-bold ">
            <hr />{" "}
            <span
              className={`${
                coupon === 1 ? "hidden" : "block"
              } text-[#00f829] flex justify-between py-2`}
            >
              <p>coupon:</p>
              <small>- ${price}</small>
            </span>
            <span className="flex justify-between py-2">
              <p>Subtotal:</p>
              <small>${price}</small>
            </span>{" "}
            <hr />
            <span className="flex justify-between py-2 text-[#DB4444]">
              <p>Shipping:</p>
              <small>+ $20</small>
            </span>
            <hr />
            <span className="flex justify-between py-2">
              <p>Total:</p>
              <small>${price + 20}</small>
            </span>
          </div>
          <div className="flex flex-col my-4 sm:text-sm text-xs">
            <span className="flex sm:h-12 h-8 justify-between ">
              <span className="flex gap-3 ">
                {paymentDel ? (
                  <span className="sm:w-5 w-4 sm:h-5 h-4 bg-white border-black border flex justify-center rounded-full pt-[3px]">
                    <button
                      onClick={() => setPaymentDel((e) => !e)}
                      className="sm:w-3 w-2 sm:h-3 h-2 rounded-full  border-black bg-black border"
                    ></button>
                  </span>
                ) : (
                  <span className="sm:w-5 w-4 sm:h-5 h-4 bg-white flex justify-center rounded-full ">
                    <button
                      onClick={() => setPaymentDel((e) => !e)}
                      className="sm:w-5 w-4 sm:h-5 h-4 rounded-full  border-black  border-[1px] bg-transparent"
                    ></button>
                  </span>
                )}
                <p className=" font-semibold">Bank</p>
              </span>

              <span className="h-2/5 flex gap-2">
                <img
                  src="..\images\visa-and-mastercard-logo-26.jpg"
                  alt="visa.jpg"
                  className="h-full"
                />
              </span>
            </span>{" "}
            <span className="flex sm:h-12 h-8  justify-between">
              <span className="flex gap-3">
                {!paymentDel ? (
                  <span className="sm:w-5 w-4 sm:h-5 h-4 bg-white border-black border flex justify-center rounded-full pt-[3px]">
                    <button
                      onClick={() => setPaymentDel((e) => !e)}
                      className="sm:w-3 w-2 sm:h-3 h-2 rounded-full  border-black bg-black border"
                    ></button>
                  </span>
                ) : (
                  <span className="sm:w-5 w-4 sm:h-5 h-4 bg-white flex justify-center rounded-full ">
                    <button
                      onClick={() => setPaymentDel((e) => !e)}
                      className="sm:w-5 w-4 sm:h-5 h-4 rounded-full  border-black  border-[1px] bg-transparent"
                    ></button>
                  </span>
                )}
                <p className=" font-semibold">Cash on Delivery</p>
              </span>
            </span>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmitCoupon();
            }}
            className="flex sm:text-[12px] flex-col font-semibold text-xs justify-between"
          >
            <p className="flex gap-2">
              <input
                type="text"
                value={couponCart}
                onChange={(e) => setCouponCart(e.target.value)}
                className={`md:w-[55%] lg:w-[60%] w-[60%] sm:h-10 h-7 border border-stone-700 shadow-sm rounded-[3px] outline-none placeholder:text-stone-400 lg:placeholder:text-xs placeholder:text-[10px] ${
                  coupon === 1 ? "" : "cursor-not-allowed"
                } text-xs sm:p-3 p-4`}
                disabled={coupon === 1 ? false : true}
                placeholder={`${
                  coupon === 1
                    ? ` coupon code Enter 1234 😉`
                    : "discount has been apllyed"
                } `}
              />
              <input
                onClick={(e) => {
                  e.preventDefault();
                  onSubmitCoupon();
                }}
                disabled={coupon === 1 ? false : true}
                type="submit"
                value="Apply Coupon"
                className={`${
                  coupon === 1 ? "cursor-pointer" : "cursor-not-allowed"
                } md:w-[40%] lg:w-[38%] w-[35%] shadow-md sm:py-2 py-2 border-[1.5px] font-[500] rounded-[4px] border-slate-300 text-center   bg-[#DB4444] hover:bg-[#ad3434] text-white`}
              />{" "}
            </p>
            <p
              className={`${
                coupon === 1 ? "invisible" : "visible"
              } w-full sm:mx-3 mx-auto md:text-sm sm:mt-2 mt-1 xs:text-[11px] text-[9px] text-[#00f829] font-semibold`}
            >
              Your discount had been applyed
            </p>
          </form>
          <Link
            to="/confirm"
            onClick={() => {
              dispatch(clearCart());
            }}
            className="sm:text-[12px]  text-xs mt-6 w-[50%] shadow-md py-3 border-[1.5px] font-[500] rounded-[4px] border-slate-300 text-center bg-[#DB4444] hover:bg-[#ad3434] text-white"
          >
            Place Order
          </Link>
        </div>
      </div>
    </>
  );
}

export default Checkout;
