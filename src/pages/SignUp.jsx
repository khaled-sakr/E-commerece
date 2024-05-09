import { Link } from "react-router-dom";
import { Flip, toast } from "react-toastify";

function SignUp() {
  function notify() {
    toast.error("sorry , this field is not completed yet", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      color: "blue",
      transition: Flip,
    });
  }
  return (
    <>
      <div className="flex w-[99%] lg:flex-row flex-col justify-evenly m-auto md:mt-6 mt-4">
        <img
          src="..\public\images\00000000000000000.png"
          alt="log in"
          className="lg:w-[40%] sm:w-7/12 xs:w-10/12 w-11/12 m-auto lg:m-0"
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            notify();
          }}
          className="lg:w-[24%] sm:w-5/12 w-8/12 lg:mx-0 mx-auto  flex flex-col lg:my-auto mt-9"
        >
          <span className="xl:text-3xl text-2xl font-semibold block w-full">
            Create An Account
          </span>
          <span className="block my-3 w-full">Enter your details blow</span>
          <span className="text-2xl mb-3 block mt-4 w-full">
            <input
              type="text"
              placeholder="Name"
              className="border-b border-slate-400 text-sm rounded-sm p-1 w-full outline-none"
            />
          </span>
          <span className="text-2xl mb-3 block w-full">
            <input
              type="text"
              placeholder="Email or Phone Number "
              className="border-b border-slate-400 text-sm rounded-sm p-1 w-full outline-none"
            />
          </span>
          <span className="text-2xl mb-4 block  w-full">
            <input
              type="password"
              placeholder="Password "
              className="border-b border-slate-400 text-sm rounded-sm p-1 w-full outline-none"
            />
          </span>
          <span className="mt-6 flex flex-col space-y-4">
            <input
              value="Create Account"
              type="submit"
              className="cursor-pointer text-base font-semibold bg-red-500 text-white rounded-sm px-6 py-2"
            />

            <span className="text-sm font-semibold text-center">
              Already have account?
              <Link className="border-b border-slate-400" to="/">
                Log In
              </Link>
            </span>
          </span>
        </form>
      </div>
    </>
  );
}

export default SignUp;
