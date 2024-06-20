import { CiMail } from "react-icons/ci";
import { SlPhone } from "react-icons/sl";
import AdressPage from "../ui/AdressPage";
function Contact() {
  return (
    <div>
      <AdressPage firstAddress="Home/" secAddress=" Contact" />
      <div className="w-9/12 flex justify-between md:flex-row flex-col  mx-auto md:space-y-0 space-y-5 lg:mt-14 sm:mt-8 mt-5">
        <div className="md:w-[33%] sm:w-9/12 w-full mx-auto shadow-md p-5">
          <span>
            <span className="w-8 h-8 bg-[#DB4444] rounded-full mr-3 pt-[1px] md:pt-[7px] md:p-2 p-1">
              <SlPhone className="inline-block text-white md:text-xl text-base" />
            </span>
            <h4 className="inline-block md:text-base text-sm font-bold ">
              Call To Us
            </h4>
            <p className="font-[500] my-2 lg:text-sm sm:text-xs text-[10px]">
              we are available 24/7,7days a week.
            </p>
            <p className="font-[500] my-2 lg:text-sm sm:text-xs text-[10px]">
              Phone: +201028577310
            </p>
          </span>
          <hr className="w-10/12 mx-auto my-8" />
          <span>
            <span className="w-8 h-8 bg-[#DB4444] rounded-full mr-3 pt-[1px] md:pt-[7px] md:p-2 p-1">
              <CiMail className="inline-block text-white md:text-xl text-base " />
            </span>
            <h4 className="inline-block md:text-base text-sm  font-bold ">
              Write To Us
            </h4>
            <p className="font-[500] my-2 lg:text-sm sm:text-xs text-[10px] ">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="font-[500] my-2 lg:text-sm sm:text-xs text-[10px] ">
              Emails: khaledsakr12345@gmail.com
            </p>
            <p className="font-[500] my-2 lg:text-sm sm:text-xs text-[10px] ">
              Emails: khaledsaqr76155@gmail.com
            </p>
          </span>
        </div>
        <form className="md:w-[65%] sm:w-9/12 w-full mx-auto shadow-md sm:p-7 p-5 border text-[8px] lg:text-xs sm:text-[10px]">
          <span className="flex  md:flex-row flex-col md:space-x-3 md:space-y-0 space-y-3">
            <input
              className="outline-none w-full h-8 flex-1 rounded-sm p-2.5  bg-[#F5F5F5]"
              type="text"
              id="name"
              required
              placeholder="Your Name"
            />
            <input
              className="outline-none w-full h-8 flex-1 rounded-sm p-2.5 bg-[#F5F5F5]"
              type="email"
              id="email"
              required
              placeholder="Your Email"
            />
            <input
              className="outline-none w-full h-8 flex-1 rounded-sm p-2.5 bg-[#F5F5F5] "
              type="number"
              id="phone"
              required
              placeholder="Your Phone"
            />
          </span>
          <textarea
            type="text"
            id="message"
            className="outline-none w-full h-44 bg-[#F5F5F5] my-6 p-2.5 "
            placeholder="Your Message"
            required
          />
          <input
            type="submit"
            value="Send Message"
            className="h-10 text-white float-right font-semibold hover:cursor-pointer text-[8px] lg:text-sm sm:text-xs rounded-[4px] w-4/12  bg-[#DB4444] "
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
