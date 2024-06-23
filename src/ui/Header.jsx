import {
  AiFillCaretRight,
  AiFillHeart,
  AiFillHome,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { PiList } from "react-icons/pi";
import { BsFillCartFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useOutsideClick } from "../features/OutSideClick";
import IconsHeaderAuth from "./IconsHeaderAuth";
import { useConFast } from "../Context/ContextProject";
import { Flip, toast } from "react-toastify";
import SearchBar from "./SearchBar";
import SearchMob from "./SearchMob";
import { useSelector } from "react-redux";
const styleSide =
  " ml-5 w-full xs:text-sm text-xs flex relative after:absolute after:text-white after:w-0 after:duration-300 after:h-[1px] after:left-0 after:bg-white after:-bottom-[2px] hover:after:w-[70%] cursor-pointer";

function Header() {
  const { authed, setAuthed, categories, setdetailsShow } = useConFast();
  const { pathname } = useLocation();
  const [showSide, setShowSide] = useState(false);
  const [showCateg, setShowCateg] = useState(false);
  const users = useSelector((state) => state.user.user);
  useEffect(() => setShowSide(false), [pathname]);
  const notify = () => {
    !authed &&
      toast.error("sorry , please Log In first!", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
  };
  const hover =
    "relative after:absolute after:w-0 after:duration-300 hover:after:w-full after:h-[1px] after:left-0 after:bg-black after:bottom-4 cursor-pointer";
  const active =
    "relative after:absolute after:w-full after:h-[1px] after:left-0 after:bottom-4 after:bg-black cursor-pointer";
  const ref = useOutsideClick(() => {
    setShowSide(false);
  });
  return (
    <div>
      <div className="mx-auto sm:flex hidden w-9/12 h-[80px] pr-2">
        <div className=" lg:w-2/12 w-[18%]">
          <Link onClick={notify} to="/" className="inline">
            <span className="inline-block font-[600] md:pt-9 pt-12 md:text-2xl text-base">
              T-Empire
            </span>
          </Link>
        </div>
        <div className="flex justify-between w-[35%] md:w-[30%] xl:text-base lg:text-sm text-xs mx-auto md:pt-10 pt-12 font-[500]">
          <Link
            onClick={notify}
            to="/"
            className={`${hover}${pathname === "/" && active}`}
          >
            <span>Home</span>
          </Link>
          <Link
            onClick={notify}
            to={authed ? "/contact" : "/"}
            className={`${hover}${pathname === "/contact" && active}`}
          >
            <span>Contact</span>
          </Link>
          <Link
            onClick={notify}
            to={authed ? "/about" : "/"}
            className={`${hover}${pathname === "/about" && active}`}
          >
            <span>About</span>
          </Link>
          {!authed ? (
            <Link
              to="/signup"
              className={`${hover}${pathname === "/signup" && active}`}
            >
              <span>Signup</span>
            </Link>
          ) : (
            <Link
              onClick={notify}
              to="/about"
              className={`${hover}${pathname === "/signup" && active}`}
            >
              <span>Q/A</span>
            </Link>
          )}
        </div>
        <SearchBar />
        {authed ? (
          <IconsHeaderAuth />
        ) : (
          <div className="inline-flex w-1/12 justify-between IconsHeaderAuth">
            <Link
              onClick={notify}
              to={authed ? "/favourite" : "/"}
              className="cursor-pointer mx-auto relative hover:text-stone-500"
            >
              <AiOutlineHeart className="lg:text-2xl text-lg md:mt-11 lg:mt-10 mt-12 " />
            </Link>
            <Link
              onClick={notify}
              to={authed ? "/cart" : "/"}
              className="cursor-pointer relative hover:text-stone-500"
            >
              <AiOutlineShoppingCart className="lg:text-2xl text-lg md:mt-11 lg:mt-10 mt-12" />
            </Link>
          </div>
        )}
      </div>
      <hr />
      <span ref={ref}>
        <div className="sm:hidden fixed flex bottom-0 w-screen xs:h-16 h-12 z-[100] bg-stone-900">
          <span className=" w-[25%] xs:pt-3 pt-2 cursor-pointer text-white hover:text-stone-300 ">
            <Link onClick={notify} to="/">
              <AiFillHome className="xs:text-4xl text-3xl m-auto" />
            </Link>
          </span>
          <span className="w-[25%] xs:pt-3 pt-2 cursor-pointer text-white hover:text-stone-300">
            <Link onClick={notify} to={authed ? "/cart" : "/"}>
              <BsFillCartFill className="xs:text-4xl text-3xl m-auto" />
            </Link>
          </span>
          <span className=" w-[25%] xs:pt-3 pt-2 cursor-pointer text-white hover:text-stone-300">
            <Link onClick={notify} to={authed ? "/favourite" : "/"}>
              <AiFillHeart className="xs:text-4xl text-3xl m-auto" />
            </Link>
          </span>
          <span className=" w-[25%] xs:pt-3 pt-2 cursor-pointer text-white hover:text-stone-300 ">
            <span
              onClick={() => {
                setShowCateg(() => false);
                setShowSide((e) => !e);
              }}
            >
              <PiList className="xs:text-4xl text-3xl m-auto" />
            </span>
          </span>
        </div>
        {showSide && (
          <div>
            <div className="sm:hidden animSlide fixed left-0 top-0 flex flex-col h-screen z-[20] xs:w-[220px] w-[180px] text-sm bg-stone-800 text-white space-y-5 py-6 px-3">
              <img
                src={users[0].imageSrc}
                alt="../images/me.jpg"
                className="w-4/12 mx-auto rounded-lg block"
              />
              <h4 className="xs:text-sm text-xs text-stone-600 xs:ml-10 ml-4">
                Hello , {users[0].firstName} {users[0].lastName}
              </h4>
              <Link
                onClick={() => {
                  notify();
                  setdetailsShow(false);
                }}
                to={authed ? "/account" : "/"}
                className={styleSide}
              >
                Account
              </Link>{" "}
              <Link onClick={notify} to="/" className={styleSide}>
                <div>Home</div>
              </Link>
              <button
                onClick={() => setShowCateg((e) => !e)}
                className="px-5 flex justify-between"
              >
                <span>Categories</span>
                <AiFillCaretRight className="my-auto" />
              </button>
              <Link
                onClick={notify}
                to={authed ? "/contact" : "/"}
                className={styleSide}
              >
                Contact
              </Link>
              <Link
                onClick={notify}
                to={authed ? "/about" : "/"}
                className={styleSide}
              >
                About
              </Link>{" "}
              {!authed && (
                <Link to={authed ? "/signup" : "/"} className={styleSide}>
                  sign up
                </Link>
              )}
              <button
                onClick={() => {
                  notify();
                  setAuthed("");
                  setShowSide(false);
                }}
                className={styleSide}
              >
                Log out
              </button>{" "}
              <SearchMob />
            </div>
            {showCateg && authed && (
              <div className="sm:hidden z-[20] fixed animSlide xs:left-[219px] left-[150px] flex flex-col h-full xs:w-[180px] w-[150px] text-sm bg-stone-800 text-white space-y-5 py-9 px-3 before:bg-white before:absolute before:left-1 top-0 before:top-0 before:h-full">
                {categories.map((category) => (
                  <Link
                    onClick={notify}
                    to={authed ? `/category/${category.categoryId}` : "/"}
                    className={styleSide}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </span>
    </div>
  );
}

export default Header;
