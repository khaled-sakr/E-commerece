import { useState } from "react";
import { useConFast } from "../Context/ContextProject";
import { Link, useNavigate } from "react-router-dom";
import { Flip, toast } from "react-toastify";

const accounts = [
  {
    name: "khaled sakr",
    email: "khaledsakr12345@gmail.com",
    password: "1234",
  },
];
function Login() {
  const { authed, setAuthed } = useConFast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const notifySuccess = () => {
    !authed &&
      toast.success(`hello Mr khaled , you are in your account now ♥`, {
        position: "top-right",
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
  const notifyFailed = () => {
    !authed &&
      toast.error(`sorry, check your email and password!`, {
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
  };
  function OnLog() {
    if (accounts[0].email === email && accounts[0].password === password) {
      setAuthed(true);
      setEmail("");
      setPassword("");
      notifySuccess();
      navigate("/");
    } else {
      setAuthed(false);
      setEmail("");
      setPassword("");
      notifyFailed();
    }
  }
  return (
    <>
      <div className="flex h-full w-[99%] lg:flex-row flex-col justify-evenly m-auto md:mt-6 mt-4">
        <img
          src="..\public\images\00000000000000000.png"
          alt="log in"
          className="lg:w-[40%] sm:w-7/12 xs:w-10/12 w-11/12 m-auto lg:m-0"
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            OnLog();
          }}
          className="lg:w-[24%] sm:w-5/12 w-8/12 lg:mx-0 mx-auto  flex flex-col lg:my-auto mt-9"
        >
          <span className="xl:text-3xl text-2xl font-semibold block w-full">
            Log In To Exclusive
          </span>
          <span className="block my-3  w-full">Enter your details blow</span>
          <span className="lg:text-2xl sm:text-base text-sm mb-3 block mt-5 w-full">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email or Phone Number "
              className="border-b border-slate-400 text-base rounded-sm p-1 w-full outline-none"
            />
          </span>
          <span className="lg:text-2xl sm:text-base text-sm mb-3 block  w-full">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password "
              className="border-b border-slate-400 text-base rounded-sm p-1 w-full outline-none"
            />
          </span>
          <span
            className={`xs:text-[11px] font-semibold text-center text-[10px] sm:text-xs ${
              authed === false ? `visible` : `invisible`
            } text-[#ED4444]`}
          >
            Wrong password. Try again or change email
          </span>
          <span className="mt-6 flex justify-between">
            <Link
              onClick={(e) => {
                e.preventDefault();
                OnLog();
              }}
              to={authed ? "/" : "/login"}
              className="sm:text-lg text-sm font-semibold bg-red-500 text-white rounded-sm px-6 py-2"
            >
              Log In
            </Link>
            <button className="sm:text-sm text-xs text-red-500 font-semibold hover:cursor-not-allowed">
              Forget Password?
            </button>
          </span>
        </form>
      </div>
    </>
  );
}

export default Login;
