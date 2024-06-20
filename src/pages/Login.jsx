import { useState } from "react";
import { useConFast } from "../Context/ContextProject";
import { Link, useNavigate } from "react-router-dom";
import { Flip, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import ErrorForms from "../ui/ErrorForms";

function Login() {
  const users = useSelector((state) => state.user.user);
  const { authed, setAuthed } = useConFast();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState,
    formState: { isDirty, isValid },
    reset,
  } = useForm();
  const { errors } = formState;
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
  const onSubmit = (data) => {
    if (data.email === users[0].email && data.password === users[0].password) {
      setAuthed(true);
      notifySuccess();
      reset();
    } else {
      setAuthed(false);
      reset();
      notifyFailed();
    }
  };
  return (
    <>
      <div className="flex h-full w-[99%] lg:flex-row flex-col justify-evenly m-auto md:mt-6 mt-4">
        <img
          src="..\public\images\00000000000000000.png"
          alt="log in"
          className="lg:w-[40%] sm:w-7/12 xs:w-10/12 w-11/12 m-auto lg:m-0"
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:w-[24%] sm:w-5/12 w-8/12 lg:mx-0 mx-auto  flex flex-col lg:my-auto mt-9"
        >
          <span className="xl:text-3xl text-2xl font-semibold block w-full">
            Log In To Exclusive
          </span>
          <span className="block my-3  w-full">Enter your details blow</span>
          <span className="lg:text-2xl sm:text-base text-sm mb-3 block mt-5 w-full">
            <input
              {...register("email", {
                required: true,
                maxLength: 30,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              type="email"
              placeholder="Email or Phone Number "
              className="border-b border-slate-400 text-base rounded-sm p-1 w-full outline-none"
            />
          </span>
          <span className="lg:text-2xl sm:text-base text-sm mb-3 block  w-full">
            <input
              {...register("password", {
                required: true,
                minLength: 6,
              })}
              type="password"
              placeholder="Password "
              className="border-b border-slate-400 text-base rounded-sm p-1 w-full outline-none"
            />
          </span>
          <ErrorForms
            errors={errors.email}
            fault1="required"
            message1="email is requried"
            fault2="pattern"
            message2="invalid email"
            fault3="maxLength"
            message3="maximum lenght is 30 char"
          />
          <span className="mt-6 flex justify-between">
            <input
              disabled={!isDirty || !isValid}
              type="submit"
              value="Log In "
              onClick={handleSubmit(onSubmit)}
              className=" disabled:bg-gray-500   sm:text-lg text-sm font-semibold bg-red-500 text-white rounded-sm px-6 py-2 cursor-pointer"
            />
            <button className="sm:text-sm text-xs text-red-500 font-semibold hover:cursor-not-allowed">
              Forget Password?
            </button>
          </span>
          <span className="sm:mt-10 mt-5 font-semibold">{users[0].email}</span>
          <span className="font-semibold">{users[0].password}</span>
        </form>
      </div>
    </>
  );
}

export default Login;
