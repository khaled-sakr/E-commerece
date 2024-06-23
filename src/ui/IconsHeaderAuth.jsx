import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useState } from "react";
import { useOutsideClick } from "../features/OutSideClick";
import { useConFast } from "../Context/ContextProject";
import { useSelector } from "react-redux";
function IconsHeaderAuth() {
  const { setAuthed } = useConFast();
  const users = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.cart);
  const [showAcc, setShowAcc] = useState(false);
  const ref = useOutsideClick(() => setShowAcc(false));
  const favourite = useSelector((state) => state.favourite.favourite);
  const { setdetailsShow } = useConFast();

  return (
    <div className="inline-flex xl:w-[11%] lg:w-[13%] md:w-[12%] w-[15%] justify-between IconsHeaderAuth">
      <Link
        to="/favourite"
        className="cursor-pointer relative hover:text-stone-500"
      >
        <AiOutlineHeart className="lg:text-2xl text-lg md:mt-11 lg:mt-10 mt-12 " />
        {favourite.length !== 0 && (
          <span
            className={`absolute ${
              favourite.length && "add"
            } -right-1 top-[42px] md:top-9 lg:top-8 text-stone-100 lg:w-[14px] lg:h-[14px] w-[11px] h-[11px] md:w-[12px] md:h-[12px] opacity-95 text-[8px] md:text-[9px] text-center m-auto rounded-full bg-[#ED4444]`}
          >
            {favourite.length}
          </span>
        )}
      </Link>
      <Link
        to="/cart"
        className="acursor-pointer relative hover:text-stone-500"
      >
        <AiOutlineShoppingCart className="lg:text-2xl text-lg md:mt-11 lg:mt-10 mt-12" />
        {cart.length !== 0 && (
          <span
            className={`absolute animate-add ${
              cart.length && "add"
            } -right-1 top-[42px] md:top-9 lg:top-8 text-stone-100 lg:w-[14px] lg:h-[14px] w-[11px] h-[11px] md:w-[12px] md:h-[12px] opacity-95 text-[8px] md:text-[9px] text-center m-auto rounded-full bg-[#ED4444]`}
          >
            {cart.length}
          </span>
        )}
      </Link>
      <div ref={ref} to="/account" className="relative ">
        <img
          onClick={() => setShowAcc((e) => !e)}
          src={users[0].imageSrc}
          className="cursor-pointer rounded-full mt-11 lg:mt-9 md:mt-10 lg:w-8 lg:h-8 h-6 w-6"
          alt="khaled"
        />
        {showAcc && (
          <div className="lg:w-40 md:w-40 w-32 h-fit absolute right-0 top-[70px] text-stone-800 text-[12px]  text-center rounded-[3px] z-10 bg-transparent flex flex-col justify-between text-base font-semibold">
            <div className=" bg-stone-200/50 backdrop-blur-lg">
              <h4 className="text-sm my-2 text-stone-600">
                Hello , {users[0].firstName} {users[0].lastName}
              </h4>
              <Link
                onClick={() => {
                  setShowAcc(() => false);
                  setdetailsShow(true);
                }}
                to="/account"
                className="flex hover:bg-white/60  p-3 justify-evenly rounded-t-[3px] h-10"
              >
                <IoPersonOutline className="w-2/12 text-lg " />
                <p className="w-9/12 lg:text-xs md:text-[10px] z-10 text-[8px]">
                  My Account
                </p>
              </Link>
              <button
                onClick={() => setAuthed("")}
                className="inline-flex w-full justify-start  p-3 hover:bg-white/60 rounded-b-[3px] h-10"
              >
                <RiLogoutBoxLine className="w-2/12 text-lg mx-auto" />
                <p className="w-9/12 lg:text-xs md:text-[10px] z-10  text-[8px]">
                  Logout
                </p>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default IconsHeaderAuth;
