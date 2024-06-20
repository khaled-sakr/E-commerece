import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Flip, toast } from "react-toastify";
import { editAddressUser } from "../features/userSlice";
import ErrorForms from "./ErrorForms";

function AdressAcc() {
  const users = useSelector((state) => state.user.user);
  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: { ...users[0], password: "" },
  });
  const id = 285;
  const dispatch = useDispatch();
  const { errors } = formState;
  const onSubmit = (data) => {
    if (
      data.fullName === users[0].fullName &&
      data.addressPref === users[0].addressPref &&
      data.address.companyName === users[0].address.companyName &&
      data.address.streetAddress === users[0].address.streetAddress &&
      data.address.governorate === users[0].address.governorate &&
      data.address.cityOrTown === users[0].address.cityOrTown &&
      data.email === users[0].email &&
      data.phone === users[0].phone
    ) {
      toast.info(`nothing happed`, {
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
    } else {
      dispatch(
        editAddressUser({
          userAddress: {
            ...data,
            password: users[0].password,
          },
          id,
        })
      );
      toast.success(`The Change had been done`, {
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
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-7/12 pt-8 sm:text-base xs:text-sm text-[11px] flex flex-col"
    >
      <h3 className="sm:text-xl xs:text-base text-sm text-red-500 mb-4 font-semibold">
        Edit Your Address
      </h3>
      <span className="flex flex-col space-y-1 w-full mb-6">
        <label htmlFor="first name" className="text-stone-500">
          Name
        </label>
        <input
          defaultValue={users[0].fullName}
          {...register("fullName", { required: true, maxLength: 30 })}
          placeholder="khaled"
          type="text"
          className="placeholder:text-xs sm:text-sm font-semibold  text-xs sm:placeholder:text-sm sm:w-full w-9/12 md:h-10 sm:h-9 xs:h-8 h-7 bg-stone-100 rounded-[3px] outline-none p-3"
        />{" "}
        <ErrorForms
          errors={errors.fullName}
          fault1="required"
          message1="the name is requried"
          fault2="maxLength"
          message2="maximum lenght is 30 char"
        />
      </span>{" "}
      <span className="flex flex-col space-y-1 w-full mb-6">
        <label htmlFor="first name " className="text-stone-500">
          Company Name
        </label>
        <input
          defaultValue={users[0].address.companyName}
          {...register("address.companyName", {
            required: true,
            maxLength: 30,
          })}
          placeholder="elmoqawloane elarab"
          type="text"
          className="placeholder:text-xs sm:text-sm font-semibold  text-xs sm:placeholder:text-sm sm:w-full w-9/12 md:h-10 sm:h-9 xs:h-8 h-7 bg-stone-100 rounded-[3px] outline-none p-3"
        />{" "}
        <ErrorForms
          errors={errors.companyName}
          fault1="required"
          message1="the companyName is requried"
          fault2="maxLength"
          message2="maximum lenght is 30 char"
        />
      </span>{" "}
      <span className="flex flex-col space-y-1 w-full mb-6">
        <label htmlFor="first name " className="text-stone-500">
          Street Address
        </label>
        <input
          defaultValue={users[0].address.streetAddress}
          {...register("address.streetAddress", {
            required: true,
            maxLength: 30,
          })}
          placeholder="central street"
          type="text"
          className="placeholder:text-xs sm:text-sm font-semibold  text-xs sm:placeholder:text-sm sm:w-full w-9/12 md:h-10 sm:h-9 xs:h-8 h-7 bg-stone-100 rounded-[3px] outline-none p-3"
        />{" "}
        <ErrorForms
          errors={errors.streetAddress}
          fault1="required"
          message1="the street address is requried"
          fault2="maxLength"
          message2="maximum lenght is 30 char"
        />
      </span>{" "}
      <span className="flex flex-col space-y-1 w-full mb-6">
        <label htmlFor="first name " className="text-stone-500">
          Governorate
        </label>
        <input
          defaultValue={users[0].address.governorate}
          {...register("address.governorate", {
            required: true,
            maxLength: 30,
          })}
          placeholder="baqllola city"
          type="text"
          className="placeholder:text-xs sm:text-sm font-semibold  text-xs sm:placeholder:text-sm sm:w-full w-9/12 md:h-10 sm:h-9 xs:h-8 h-7 bg-stone-100 rounded-[3px] outline-none p-3"
        />{" "}
        <ErrorForms
          errors={errors.governorate}
          fault1="required"
          message1="the governorate is requried"
          fault2="maxLength"
          message2="maximum lenght is 30 char"
        />
      </span>{" "}
      <span className="flex flex-col space-y-1 w-full mb-6">
        <label htmlFor="first name " className="text-stone-500">
          CityOrTown
        </label>
        <input
          defaultValue={users[0].address.cityOrTown}
          {...register("address.cityOrTown", {
            required: true,
            maxLength: 30,
          })}
          placeholder="baqllola city"
          type="text"
          className="placeholder:text-xs sm:text-sm font-semibold  text-xs sm:placeholder:text-sm sm:w-full w-9/12 md:h-10 sm:h-9 xs:h-8 h-7 bg-stone-100 rounded-[3px] outline-none p-3"
        />{" "}
        <ErrorForms
          errors={errors.cityOrTown}
          fault1="required"
          message1="the city is requried"
          fault2="maxLength"
          message2="maximum lenght is 30 char"
        />
      </span>{" "}
      <span className="flex flex-col space-y-1 w-full mb-6">
        <label htmlFor="first name " className="text-stone-500">
          addressPref
        </label>
        <input
          defaultValue={users[0].addressPref}
          {...register("addressPref", {
            required: true,
            maxLength: 300,
          })}
          placeholder="baqllola /elsanta"
          type="text"
          className="placeholder:text-xs sm:text-sm font-semibold  text-xs sm:placeholder:text-sm sm:w-full w-9/12 md:h-10 sm:h-9 xs:h-8 h-7 bg-stone-100 rounded-[3px] outline-none p-3"
        />{" "}
        <ErrorForms
          errors={errors.addressPref}
          fault1="required"
          message1="the address is requried"
          fault2="maxLength"
          message2="maximum lenght is 30 char"
        />
      </span>{" "}
      <span className="flex flex-col space-y-1 w-full mb-6">
        <label htmlFor="first name " className="text-stone-500">
          Phone Number
        </label>
        <input
          defaultValue={users[0].phone}
          {...register("phone", {
            required: true,
            minLength: 11,
            maxLength: 13,
          })}
          placeholder="+201028577310"
          type="number"
          className="placeholder:text-xs sm:text-sm font-semibold  text-xs sm:placeholder:text-sm sm:w-full w-9/12 md:h-10 sm:h-9 xs:h-8 h-7 bg-stone-100 rounded-[3px] outline-none p-3"
        />{" "}
        <ErrorForms
          errors={errors.phone}
          fault1="required"
          message1="the phone is requried"
          fault2="maxLength"
          message2="maximum lenght is 11 number"
          fault3="maxLength"
          message3="maximum lenght is 12 number"
        />
      </span>{" "}
      <span className="flex flex-col space-y-1 w-full mb-6">
        <label htmlFor="first name " className="text-stone-500">
          Email Address
        </label>
        <input
          defaultValue={users[0].email}
          {...register("email", {
            required: true,
            maxLength: 30,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
          placeholder="khaledsakr12345@gmail.com"
          type="email"
          className="placeholder:text-xs sm:text-sm font-semibold  text-xs sm:placeholder:text-sm sm:w-full w-9/12 md:h-10 sm:h-9 xs:h-8 h-7 bg-stone-100 rounded-[3px] outline-none p-3"
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
      <span className="flex w-full gap-2 justify-end  font-semibold lg:sm:text-base sm:text-xs xs:text-xs text-[9px]">
        <button
          onClick={() => {
            reset();
            toast.info(`Reset The latest changes`, {
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
          }}
          type="reset"
          name="btn"
          className="lg:w-3/12 sm:w-4/12 w-5/12 py-3 hover:bg-stone-200 rounded-[4px]"
        >
          cancel
        </button>
        <button className="lg:w-3/12 sm:w-4/12 w-5/12 shadow-md py-3 border-[1.5px] rounded-[4px] border-slate-300 text-center bg-[#DB4444] hover:bg-[#ad3434] text-white">
          Save Changes
        </button>
      </span>
    </form>
  );
}

export default AdressAcc;
