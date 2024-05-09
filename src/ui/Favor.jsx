import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { useOutsideClick } from "../features/OutSideClick";

function Favor() {
  const [openFav, setOpenFav] = useState(false);
  const ref = useOutsideClick(() => setOpenFav(false));
  return (
    <div ref={ref} className="z-[11] relative mr-9 my-auto">
      <button className="m-auto" onClick={() => setOpenFav((e) => !e)}>
        <AiFillHeart className="md:text-3xl text-2xl hover:text-pink-800 text-pink-700" />
        <span className="absolute -top-3 -right-2 bg-gray-300 rounded-full w-5 h-5 opacity-85 text-[12px] text-center m-auto">
          2
        </span>
      </button>
      {openFav && (
        <div className="relative">
          <span className=" z-[11] absolute right-[5px] md:-top-2 -top-1  border-transparent border-[10px] border-b-gray-300 w-2 h-2"></span>

          <span className="bg-gray-300 text-stone-200 rounded-md absolute -right-4 md:top-3 top-4 z-10 lg:w-72 w-56 lg:h-80 h-56 pt-4 overflow-y-scroll  space-y-3 fav">
            <div className="cursor-pointer bg-gray-600 rounded-lg lg:w-64 w-40 h-20 mx-auto"></div>
            <div className="cursor-pointer bg-gray-600 rounded-lg lg:w-64 w-40 h-20 mx-auto"></div>
          </span>
        </div>
      )}
    </div>
  );
}

export default Favor;
