import { Link } from "react-router-dom";
import ContactUs from "./ContactUs";
import MessageFooter from "./MessageFooter";
import { useConFast } from "../Context/ContextProject";
import { LuSendHorizonal } from "react-icons/lu";
import {
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
} from "react-icons/bi";
function AboutUs() {
  const { authed } = useConFast();
  return (
    <div
      id="about"
      className="pb-auto flex-shrink-0 mt-10 sm:mt-20 bg-black w-full mx-auto pt-10 lg:pb-20 sm:pb-10 pb-20 lg:px-20 px-10"
    >
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 justify-center  sm:text-start text-center text-white gap-9">
        <div className="flex flex-col w-full gap-5 ">
          <h2 className="lg:text-xl text-lg mb-2">T-Empire</h2>
          <p className="text-sm">Subscribe</p>
          <p className="text-xs text-stone-400 ">
            Get 10% off your first order
          </p>
          <span className="relative w-10/12  rounded-sm sm:block hidden">
            <input
              type="text"
              className="bg-black text-xs w-full rounded-sm outline-none px-2 py-1.5 text-white border-white border lg:placeholder:text-[10px] md:placeholder:text-[8px] placeholder:text-[10px]  placeholder:text-stone-500 cursor-not-allowed"
              placeholder="Enter your E-mail"
            />
            <LuSendHorizonal className="pointer   absolute bottom-2 right-2" />
          </span>
        </div>
        <div className="flex flex-col w-full gap-5">
          <h2 className="lg:text-xltext-lg mb-2"> Support</h2>
          <span className="text-xs text-stone-400 w-12/12">
            315 baklola, center street, El-santa,El-Gharbia
          </span>
          <span className="text-xs text-stone-400">khaledsakr@gmail.com</span>
          <span className="text-xs text-stone-400">+201028577310</span>
        </div>
        <div className="flex flex-col w-full gap-5 ">
          <h2 className="lg:text-xltext-lg mb-2">Account</h2>
          <Link
            to={authed ? "/cart" : "/"}
            className="text-xs relative after:absolute after:w-0 after:duration-300 hover:after:w-3/12 after:h-[1px] after:left-[38%] sm:after:left-0 after:bg-white after:bottom-0 cursor-pointer"
          >
            Cart
          </Link>
          <Link
            to={authed ? "favourite" : "/"}
            className="text-xs relative after:absolute after:w-0 after:duration-300 hover:after:w-3/12 after:h-[1px] after:left-[38%] sm:after:left-0 after:bg-white after:bottom-0 cursor-pointer"
          >
            Favourite
          </Link>
          <Link
            to={authed ? "/shop" : "/"}
            className="text-xs relative after:absolute after:w-0 after:duration-300 hover:after:w-3/12 after:h-[1px] after:left-[38%] sm:after:left-0 after:bg-white after:bottom-0 cursor-pointer"
          >
            Shop
          </Link>
        </div>{" "}
        <div className="flex flex-col w-full gap-5">
          <h2 className="lg:text-xltext-lg mb-2">Quick Link</h2>
          <Link
            to={authed ? "/about" : "/"}
            className="text-xs  relative after:absolute after:w-0 after:duration-300 hover:after:w-3/12 after:h-[1px] after:left-[38%] sm:after:left-0 after:bg-white after:bottom-0 cursor-pointer"
          >
            About
          </Link>
          <Link
            to={authed ? "/contact" : "/"}
            className="text-xs  relative after:absolute after:w-0 after:duration-300 hover:after:w-3/12 after:h-[1px] after:left-[38%] sm:after:left-0 after:bg-white after:bottom-0 cursor-pointer"
          >
            Contact
          </Link>
          <Link
            to={authed ? "/contact" : "/"}
            className="text-xs  relative after:absolute after:w-0 after:duration-300 hover:after:w-3/12 after:h-[1px] after:left-[38%] sm:after:left-0 after:bg-white after:bottom-0 cursor-pointer"
          >
            Q/A
          </Link>
        </div>{" "}
        <div className="flex flex-col w-full gap-2">
          <h2 className="lg:text-xltext-lg mb-2">Download App</h2>
          <p className="text-[10px] text-stone-400">
            Save 3$ with App New User Only
          </p>
          <span className="w-full">
            <img
              className="w-9/12 sm:mx-0 mx-auto"
              src="\images\haz.png"
              alt="code"
            />
          </span>
          <span className="flex sm:justify-around sm:w-9/12 w-full  justify-evenly gap-3 sm:gap-0">
            <a
              href="https://www.facebook.com/profile.php?id=100007482887939"
              className=" relative after:absolute after:w-0 after:duration-300 hover:after:w-full after:h-[1px] after:left-0 after:bg-white after:bottom--2 cursor-pointer "
            >
              <BiLogoFacebook className="text-xl sm:text-base relative after:absolute after:w-0 after:duration-300 hover:after:w-3/12 after:h-[1px] after:left-0 after:bg-white after:bottom-0 cursor-pointer " />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100007482887939"
              className="relative text-xl sm:text-base after:absolute after:w-0 after:duration-300 hover:after:w-full after:h-[1px] after:left-0 after:bg-white after:bottom--2 cursor-pointer "
            >
              <BiLogoInstagramAlt className=" " />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100007482887939"
              className="text-xl sm:text-base relative after:absolute after:w-0 after:duration-300 hover:after:w-full after:h-[1px] after:left-0 after:bg-white after:bottom--2 cursor-pointer"
            >
              <BiLogoLinkedin className="  " />
            </a>
            <a
              href="https://github.com/khaled-sakr"
              className="text-xl sm:text-base relative after:absolute after:w-0 after:duration-300 hover:after:w-full after:h-[1px] after:left-0 after:bg-white after:bottom--2 cursor-pointer "
            >
              <BiLogoGithub className=" " />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
