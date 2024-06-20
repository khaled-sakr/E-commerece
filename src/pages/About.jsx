import { CiDollar, CiMoneyCheck1, CiShop } from "react-icons/ci";
import { PiHandbagLight } from "react-icons/pi";
import { GiMoneyStack } from "react-icons/gi";
import Founder from "../ui/Founder";
import AdditionFet from "../ui/AdditionFet";
import AdressPage from "../ui/AdressPage";
function About() {
  return (
    <div>
      <AdressPage firstAddress="Home /" secAddress=" About" />
      <div className="flex w-fit lg:w-10/12 mx-auto pl-0 lg:pl-2 lg:flex-row flex-col lg:space-y-0 space-y-4 justify-evenly lg:mt-14 sm:mt-8 mt-5 lg:mb-24 sm:mb-20 mb-14">
        <span className="lg:w-6/12 sm:w-9/12 w-11/12 mx-auto">
          <h3 className="sm:text-3xl text-2xl font-bold">Our story</h3>
          <p className="sm:text-base text-sm sm:font-semibold font-normal lg:mt-4 sm:mt-3 mt-1 sm:leading-8 leading-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, nemo.
            Asperiores, esse cum? Ipsam, delectus! Deleniti omnis velit delectus
            quod, pariatur voluptatum vero ea maxime eaque, in, atque qui
            laboriosam! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Sed, nemo. Asperiores, esse cum? Ipsam, delectus! Deleniti
            omnis velit delectus quod, pariatur voluptatum vero ea maxime eaque,
            in, atque qui laboriosam! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sed, nemo. Asperiores, esse cum!
          </p>
        </span>
        <img
          className="lg:w-4/12 sm:w-9/12 w-full  md: mx-auto "
          src="\images\310.png"
          alt=""
        />
      </div>
      <div className="md:flex grid grid-flow-row mt-32 md:space-y-0 space-y-3 mx-auto  md:justify-center mb-16">
        <span className="md:w-[18%] lg:w-[14%] xs:w-6/12 w-8/12 border h-40 p-auto text-center md:mx-2 mx-auto rounded-sm border-slate-300 ">
          <p className="mt-3 bg-gray-400 inline-block sm:p-2 p-1 rounded-full">
            <CiShop className="inline-block text-4xl border rounded-full sm:p-1.5 p-2 w-12 h-12 bg-black text-white" />
          </p>
          <h2 className=" mt-3 text-2xl font-bold">10.5k</h2>
          <p className="my-1 lg:text-xs md:text-[10px] text-xs font-semibold text-stone-500">
            Sallers active our site
          </p>
        </span>
        <span className=" md:w-[18%] lg:w-[14%] xs:w-6/12 w-8/12 border h-40 p-auto text-center md:mx-2 mx-auto rounded-sm bg-[#DB4444] border-slate-300 ">
          <p className="mt-3 bg-red-200 inline-block sm:p-2 p-1 rounded-full ">
            <CiDollar className="inline-block text-4xl border rounded-full sm:p-1 p-1.5 w-12 h-12 bg-white" />
          </p>
          <h2 className=" mt-3 text-2xl font-bold text-white">33k</h2>
          <p className="my-1 lg:text-xs md:text-[10px] text-xs font-semibold text-stone-100">
            Mounthly Produduct sale
          </p>
        </span>
        <span className=" md:w-[18%] lg:w-[14%] xs:w-6/12 w-8/12 border h-40 p-auto text-center md:mx-2 mx-auto rounded-sm border-slate-300 ">
          <p className="mt-3 bg-gray-400 inline-block sm:p-2 p-1 rounded-full">
            <PiHandbagLight className="inline-block text-4xl border rounded-full sm:p-1.5 p-2 w-12 h-12 bg-black text-white" />
          </p>
          <h2 className=" mt-3 text-2xl font-bold">25.5k</h2>
          <p className="my-1 lg:text-xs md:text-[10px] text-xs font-semibold text-stone-500">
            Customer active in our site
          </p>
        </span>
        <span className="md:w-[18%] lg:w-[14%] xs:w-6/12 w-8/12 border h-40 p-auto text-center md:mx-2 mx-auto rounded-sm border-slate-300 ">
          <p className="mt-3 bg-gray-400 inline-block sm:p-2 p-1 rounded-full">
            <GiMoneyStack className="inline-block text-4xl border rounded-full sm:p-1.5 p-2 w-12 h-12 bg-black text-white" />
          </p>
          <h2 className=" mt-3 text-2xl font-bold">25k</h2>
          <p className="my-1 lg:text-xs md:text-[10px] text-xs font-semibold text-stone-500">
            Anual gross sale in our site
          </p>
        </span>
      </div>
      <hr className="lg:my-14 sm:my-9 my-6 border-slate-400 sm:w-4/12 w-8/12 mx-auto" />
      <Founder />
      <hr className="lg:my-14 sm:my-9 my-6 border-slate-400 sm:w-4/12 w-8/12 mx-auto" />
      <AdditionFet />
    </div>
  );
}

export default About;
