import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
} from "react-icons/bi";
function ContactUs() {
  return (
    <>
      <div className="flex-col mx-auto md:mt-8 mt-12 m-auto flex space-y-9">
        <span className="sm:text-2xl md:m-0 m-auto text-base">Contact Us</span>
        <div className="sm:text-xl text-sm ml-3">
          Phone :
          <a
            href="tel:+2010258577310"
            className="mt-3 ml-4 sm:text-base text-xs 
            relative after:absolute after:w-0 after:duration-300 hover:after:w-[100%] after:h-[1px] after:left-0 after:bg-white after:-bottom-1 "
          >
            01028577310
          </a>
        </div>
        <div className="sm:text-xl text-sm ml-3">
          E-Mail :
          <a
            href="mailto:Khaledsakr12345@email.com"
            className="mt-3 ml-4 sm:text-base text-xs relative after:absolute after:w-0 after:duration-300 hover:after:w-[100%] after:h-[1px] after:left-0 after:bg-white after:-bottom-1"
          >
            khaledsakr12345@gmail.com
          </a>
        </div>
        <hr className="w-9/12 m-auto" />

        <div className="flex-col flex ">
          <span className="sm:text-2xl md:m-0 m-auto text-base">Follow Us</span>
          <div className="sm:text-xl text-sm flex justify-evenly mt-9">
            <a
              href="https://www.facebook.com/profile.php?id=100007482887939"
              className="md:text-xl sm:text-base text-sm relative after:absolute after:w-0 after:duration-300 hover:after:w-[90%] after:h-[1px] after:left-1 after:bg-white after:-bottom-1 p-3"
            >
              <BiLogoFacebook className="inline text-4xl" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100007482887939"
              className="md:text-xl sm:text-base text-sm relative after:absolute after:w-0 after:duration-300 hover:after:w-[90%] after:h-[1px] after:left-1 after:bg-white after:-bottom-1  p-3"
            >
              <BiLogoInstagramAlt className="inline text-4xl" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100007482887939"
              className="md:text-xl sm:text-base text-sm relative after:absolute after:w-0 after:duration-300 hover:after:w-[90%] after:h-[1px] after:left-1 after:bg-white after:-bottom-1  p-3"
            >
              <BiLogoLinkedin className="inline text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
