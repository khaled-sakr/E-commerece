import { Link, useLocation } from "react-router-dom";
import FlashSales from "../ui/FlashSales";
import { useDispatch, useSelector } from "react-redux";
import { RiMailSendLine } from "react-icons/ri";
import { GiPositionMarker } from "react-icons/gi";
import { BiPhone } from "react-icons/bi";
import { GrSchedule } from "react-icons/gr";
import { clearOrder, resetCoupon } from "../features/cartSlice";
import { useEffect } from "react";
import { CiMoneyBill } from "react-icons/ci";

function Confirm() {
  const order = useSelector((state) => state.cart.order);
  const cart = useSelector((state) => state.cart.cart);
  const price = useSelector((state) => state.cart.price);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex md:flex-row flex-col sm:w-9/12 w-full mx-auto sm:my-16 my-8">
        <div className="font-serif flex flex-col gap-9 lg:w-9/12 mb-14 w-full mx-auto  relative">
          <h3 className="bold text-3xl blur-none text-center">T-Empire</h3>
          <h1 className="lg:text-5xl md:text-3xl text-4xl text-center">
            THANK YOU
          </h1>
          <p className="mx-auto w-8/12 text-center lg:text-base text-sm">
            We Are very happy to deal with you Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Exercitationem recusandae officia
            eveniet. Expedita est ratione laudantium amet, tempora labore quas
            quae animi dicta asperiores sapiente soluta cumque enim. Facere,
            sed.
          </p>
          <Link
            to="/"
            onClick={() => {
              dispatch(clearOrder());
              dispatch(resetCoupon());
            }}
            className="text-sm font-thin py-2 shadow-lg lg:w-4/12 w-6/12 mx-auto border-[1.5px] rounded-[4px] border-slate-300 text-center bg-[#DB4444] hover:bg-[#ad3434] text-white"
          >
            Continue Shopping
          </Link>
        </div>
        <div className="lg:text-sm text-xs h-full border-0 md:border-l p-4 border-black bg-stobne-300 md:w-5/12 w-full flex flex-col gap-8 font-semibold">
          <RiMailSendLine className="inline text-5xl text-green-600 text-center mx-auto" />
          <div className="w-full text-center lg:text-lg text-base text-green-600">
            <p className="inline-block mr-3">
              We Recieved You Order,khaled Sakr
            </p>
          </div>
          <hr className="bg-stone-700 w-11/12 mx-auto h-[2px]" />
          <div className="text-center mr-3 ">
            <GrSchedule className="block w-full mx-auto mb-2 text-xl " /> You
            will recieve at 12 marsh 2024 (Expceted date)
          </div>{" "}
          <hr className="w-6/12 mx-auto" />
          <div className="text-center mr-3 ">
            <CiMoneyBill className="block w-full mx-auto mb-2 text-3xl " /> This
            Price ${price} Will be Cash On Delivery
          </div>{" "}
          <hr className="w-6/12 mx-auto" />
          <div className=" text-center mr-3">
            <GiPositionMarker className="block w-full mx-auto mb-2 text-2xl" />
            We Will send your order to baqlola , elsanta , elgharbio
          </div>
          <hr className="w-6/12 mx-auto" />
          <div className="text-center mr-3">
            <BiPhone className="block w-full mx-auto mb-2 text-2xl" />
            your number phone: +201028577310
          </div>
          <hr className="w-6/12 mx-auto" />
          {order.map((product) => (
            <div className="flex h-14 justify-around">
              <img
                src={product.srcOne}
                alt="t-shirt"
                className="h-2/4 border-r"
              />
              <p className="lg:text-xs text-[10px]">{product.name}</p>
              <p>'{product.color}'</p>
              <p>'{product.size}'</p>
            </div>
          ))}
        </div>
      </div>
      <FlashSales />
    </>
  );
}

export default Confirm;
