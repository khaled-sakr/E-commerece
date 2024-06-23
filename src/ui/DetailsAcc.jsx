import { MdEditSquare, MdModeEditOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useFieldArray, useForm } from "react-hook-form";
import { editImageUser, editInfoUser } from "../features/userSlice";
import { useEffect, useRef, useState } from "react";
import { Flip, toast } from "react-toastify";
import ErrorForms from "./ErrorForms";

function DetailsAcc() {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const imageready = image;
  const users = useSelector((state) => state.user.user);
  const { register, handleSubmit, formState, reset, getValues } = useForm({
    defaultValues: {
      ...users[0],
      password: "",
      newPassword: "",
      conNewPassword: "",
      imageSrc: users[0].imageSrc,
    },
  });

  function handleImageClick() {
    inputRef.current.click();
  }
  function handleImageChange(event) {
    const file = event.target.files[0];
    setImage(event.target.files[0]);
    dispatch(
      editImageUser({
        image: image ? image : users[0].imageSrc,
        id: id,
        imageName: image.name,
      })
    );
  }
  const { errors } = formState;
  const dispatch = useDispatch();
  const id = 285;
  const onSubmit = (data) => {
    const ifChange =
      users[0].imageName === image.name &&
      data.addressPref === users[0].addressPref &&
      data.firstName === users[0].firstName &&
      data.lastName === users[0].lastName &&
      data.email === users[0].email &&
      data.password === "";
    if (ifChange) {
      toast.info(`nothing happed`, {
        position: "top-left",
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
      if (data.password !== "" && data.password !== users[0].password) {
        reset({
          password: "",
          newPassword: "",
          conNewPassword: "",
        });
        toast.error(`The Current Password is wrong`, {
          position: "top-left",
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
        dispatch(
          editInfoUser({
            userIfo: {
              ...data,
              password: !data.password ? users[0].password : data.password,
            },
            id: id,
            password:
              data.password === users[0].password
                ? data.newPassword
                : users[0].password,
            image: image ? image : users[0].imageSrc,
            imageName: image.name,
          })
        );
        image &&
          dispatch(
            editImageUser({
              image: image ? image : users[0].imageSrc,
              id: id,
              imageName: image.name,
            })
          );
        toast.success(`The Change had been done`, {
          position: "top-left",
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Flip,
        });

        reset({
          password: "",
          newPassword: "",
          conNewPassword: "",
        });
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-7/12 sm:text-base xs:text-sm text-[11px] flex flex-col justify-center relative"
    >
      <span className="inline mx-auto w-40 h-40 rounded-full relative text-transparent hover:text-black">
        {image ? (
          <img
            name="image"
            onClick={handleImageClick}
            className="sm:w-40 w-24 sm:h-40 h-24 border-4 relative hover:border-stone-600 border-stone-400 mx-auto mb-8 rounded-full"
            src={URL.createObjectURL(image)}
          />
        ) : (
          <img
            name="image"
            onClick={handleImageClick}
            className="sm:w-40  w-24 sm:h-40 h-24 cursor-pointer border-4 relative hover:border-stone-600 border-stone-400 mx-auto mb-8 rounded-full"
            src={users[0].imageSrc}
            defaultValue={users[0].imageSrc}
          />
        )}
        <input
          type="file"
          ref={inputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
          className=" cursor-pointer sm:h-[160px] h-[95px] sm:w-[160px] w-[95px] absolute sm:top-[0%] top-[0%] sm:right-[0%] right-[40%] text-transparent hover:text-white rounded-full bg-transparent  hover:bg-stone-800/50 z-10 hover:backdrop-blur-sm p-3"
        />
        <MdModeEditOutline
          onClick={handleImageClick}
          className="absolute sm:top-[40%] cursor-pointer top-[27%] sm:left-[38%] left-[47%] sm:text-4xl p-2 text-xs rounded-full hover:bg-stone-400 bg-transparent "
        />
      </span>
      <h3 className="sm:text-xl xs:text-base text-sm text-red-500 mb-4 font-semibold">
        Edit Your Profile
      </h3>
      <p className="flex sm:flex-row flex-col justify-between mb-6 gap-6">
        <span className="space-y-1 w-9/12 sm:w-[47%]">
          <label htmlFor="first name">First Name</label>
          <input
            defaultValue={users[0].firstName}
            {...register("firstName", { required: true, maxLength: 20 })}
            placeholder={users[0].firstName}
            type="text"
            name="firstName"
            className="placeholder:text-[10px] font-semibold sm:text-sm text-xs sm:placeholder:text-xs md:placeholder:text-sm w-full md:h-10 sm:h-9 xs:h-8 h-7 bg-stone-100 rounded-[3px] outline-none p-3"
          />{" "}
          <ErrorForms
            errors={errors.firstName}
            fault1="required"
            message1="first name is requried"
            fault2="maxLength"
            message2="maximum lenght is 15 char"
          />
        </span>
        <span className="space-y-1 w-9/12 sm:w-[47%]">
          <label htmlFor="first name">Last Name</label>
          <input
            defaultValue={users[0].lastName}
            {...register("lastName", {
              required: true,
              maxLength: 15,
              pattern: /^[A-Za-z]+$/i,
            })}
            placeholder={users[0].lastName}
            type="text"
            name="lastName"
            className="placeholder:text-[10px] font-semibold sm:text-sm text-xs sm:placeholder:text-xs md:placeholder:text-sm w-full md:h-10 sm:h-9 xs:h-8 h-7 bg-stone-100 rounded-[3px] outline-none p-3"
          />{" "}
          <ErrorForms
            errors={errors.lastName}
            fault1="required"
            message1="last name is requried"
            fault2="maxLength"
            message2="maximum lenght is 15 char"
            fault3="pattern"
            message3="first namemust be [a-Z] or /^ or $/i"
          />
        </span>
      </p>
      <p className="flex sm:flex-row flex-col justify-between mb-6 gap-6">
        <span className="space-y-1 w-9/12 sm:w-[47%]">
          <label htmlFor="first name">Email</label>
          <input
            defaultValue={users[0].email}
            {...register("email", {
              required: true,
              maxLength: 30,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
            placeholder="khaledsakr12345@gmail.com"
            type="email"
            name="email"
            className="placeholder:text-[10px] font-semibold sm:text-sm text-xs sm:placeholder:text-xs md:placeholder:text-sm w-full md:h-10 sm:h-9 xs:h-8 h-7 bg-stone-100 rounded-[3px] outline-none p-3"
          />{" "}
          <ErrorForms
            errors={errors.email}
            fault1="required"
            message1="email is requried"
            fault2="pattern"
            message2="invalid email"
            fault3="maxLength"
            message3="maximum lenght is 30 char"
          />
        </span>
        <span className="space-y-1 w-9/12 sm:w-[47%]">
          <label htmlFor="first name">Address</label>
          <input
            defaultValue={users[0].addressPref}
            {...register("addressPref", {
              required: true,
              maxLength: 30,
              pattern: /^[a-zA-Z0-9\s,'-.]*$/,
            })}
            placeholder="baqllola, elsanta , elgharbia"
            type="text"
            name="addressPref"
            className="placeholder:text-[10px] font-semibold sm:text-sm text-xs sm:placeholder:text-xs md:placeholder:text-sm w-full md:h-10 sm:h-9 xs:h-8 h-7 bg-stone-100 rounded-[3px] outline-none p-3"
          />{" "}
          <ErrorForms
            errors={errors.addressPref}
            fault1="required"
            fault2="maxLength"
            message2="maximum lenght is 30 char"
            fault3="pattern"
            message3="invalid address"
          />
        </span>
      </p>
      <span className="space-y-1 w-full mb-3">
        <label htmlFor="first name">Password Changes</label>
        <input
          placeholder="Current Password"
          type="password"
          name="password"
          {...register("password", {
            required: getValues().newPassword ? true : false,
            maxLength: 15,
            minLength: 6,
            pattern: /^[a-zA-Z0-9\s,'-.]*$/,
          })}
          className="placeholder:text-[10px] font-semibold sm:text-sm text-xs sm:placeholder:text-xs md:placeholder:text-sm sm:w-full w-9/12 md:h-10 sm:h-9 xs:h-8 h-7 bg-stone-100 rounded-[3px] outline-none p-3"
        />{" "}
        <ErrorForms
          errors={errors.password}
          fault1="required"
          message1="this field is required"
          fault2="minLength"
          message2="minimum lenght is 8 char"
          fault3="maxLength"
          message3="maximum lenght is 20 char"
          fault4="pattern"
          message4="invalid password"
        />
      </span>{" "}
      <span className="space-y-1 w-full mb-3">
        <input
          placeholder="New Password"
          {...register("newPassword", {
            required: getValues().password !== "" ? true : false,
            maxLength: 15,
            minLength: 6,
            pattern: /^[a-zA-Z0-9\s,'-.]*$/,
          })}
          name="newPassword"
          type="password"
          className="placeholder:text-[10px] font-semibold sm:text-sm text-xs sm:placeholder:text-xs md:placeholder:text-sm sm:w-full w-9/12 md:h-10 sm:h-9 xs:h-8 h-7 bg-stone-100 rounded-[3px] outline-none p-3"
        />{" "}
        <ErrorForms
          errors={errors.newPassword}
          fault1="minLength"
          message1="minimum lenght is 8 char"
          fault2="maxLength"
          message2="maximum lenght is 20 char"
          fault3="pattern"
          message3="invalid password"
          fault4="required"
          message4="this field is required"
        />
      </span>{" "}
      <span className="space-y-1 w-full mb-6">
        <input
          placeholder="Confirm New Password"
          type="password"
          {...register("conNewPassword", {
            // required: getValues().password !== "" ? true : false,
            required: getValues().password !== "" ? true : false,
            maxLength: 15,
            minLength: 6,
            pattern: /^[a-zA-Z0-9\s,'-.]*$/,
            validate: (value) => value === getValues().newPassword,
          })}
          name="conNewPassword"
          className="placeholder:text-[10px] font-semibold sm:text-sm text-xs sm:placeholder:text-xs md:placeholder:text-sm sm:w-full w-9/12 md:h-10 sm:h-9 xs:h-8 h-7 bg-stone-100 rounded-[3px] outline-none p-3"
        />{" "}
        <ErrorForms
          errors={errors.conNewPassword}
          fault1="minLength"
          message1="minimum lenght is 8 char"
          fault2="maxLength"
          message2="maximum lenght is 20 char"
          fault3="validate"
          message3="same previos password"
          fault4="required"
          message4="this field is required"
        />
      </span>
      <span className="flex w-full gap-2 justify-end  font-semibold lg:sm:text-base sm:text-xs xs:text-xs text-[9px]">
        <button
          onClick={() => {
            reset();
            toast.info(`Reset The latest changes`, {
              position: "top-left",
              autoClose: 4000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Flip,
            });
          }}
          type="reset"
          name="btn"
          className="lg:w-3/12 sm:w-4/12 w-5/12 py-3 hover:bg-stone-200 rounded-[4px]"
        >
          cancel
        </button>
        <input
          type="submit"
          value="Save Changes"
          className="lg:w-3/12 disabled:bg-gray-500 sm:w-4/12 w-5/12 shadow-md py-3 border-[1.5px] rounded-[4px] border-slate-300 text-center bg-[#DB4444] hover:bg-[#ad3434] text-white"
        />
      </span>
      <div className="text-sm block font-semibold">
        <span>currnet password:</span>'{users[0].password}'
      </div>
    </form>
  );
}

export default DetailsAcc;
