import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
} from "react-icons/bi";
function ContactUs() {
  return (
    // <>
    //   <div className="flex w-1/2 justify-around flex-wrap mb-9">
    //     <div className="flex mb-20 sm:mb-0 gap-5 flex-wrap justify-center">
    //       <div className="mt-8 sm:ml-4 ml-0 md:text-xl sm:text-base text-xs sm:inline-block flex flex-col">
    //         <div className=" md:text-xl sm:text-base text-xs ml-9">
    //           <AiOutlinePhone className="inline mr-2 bg-slate-400  rounded-full md:p-3 p-1 md:text-5xl sm:text-3xl text-xl " />
    //           PHONE SUPPORT :
    //         </div>
    //         <a
    //           href="+2010258577310"
    //           className="mt-3 ml-12 rounded-xl p-2 bg-stone-300 inline-block md:w-auto sm:w-32 w-24 text-center"
    //         >
    //           01028577310
    //         </a>
    //       </div>
    //       <div className="sm:mt-8 xs:mt-8 mt-4 ml-24 sm:block flex flex-col">
    //         <div className=" md:text-xl sm:text-base text-xs">
    //           <FiMail className="inline mr-2 bg-slate-400  rounded-full md:p-3 p-1 md:text-5xl sm:text-3xl text-xl " />
    //           EMAIL SUPPORT :
    //         </div>
    //         <a
    //           href="mailto:Khaledsakr12345@email.com"
    //           className="mt-3 ml-4 rounded-xl p-2 bg-stone-300 inline-block md:text-xl sm:text-base text-xs md:w-auto sm:w-60 w-44 text-center"
    //         >
    //           khaledsakr12345@gmail.com
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   <div>
    //     <div>
    //       <span className="flex pt-10 sm:ml-4 ml-0 md:text-xl sm:text-lg text-sm text">
    //         you can follow us on :
    //       </span>
    //       <div className="mt-4 ml-6 text-blue-800">
    //         <a
    //           href="https://www.facebook.com/profile.php?id=100007482887939"
    //           className="md:text-xl sm:text-base text-sm"
    //         >
    //           <img
    //             src="..\images\social-facebook.svg"
    //             alt="facebook.png"
    //             className="md:h-7 sm:h-5 h-4 inline-block mr-4"
    //           />
    //           facebook
    //         </a>
    //       </div>
    //       <div className=" mt-4 ml-6 text-red-60 colIns">
    //         <a
    //           href="https://www.instagram.com/khaled_sakr310/"
    //           className="md:text-xl sm:text-base text-sm"
    //         >
    //           <img
    //             src="..\images\instagram.svg"
    //             alt="instegram.png"
    //             className="md:h-7 sm:h-5 h-4 inline-block mr-3"
    //           />
    //           instegram
    //         </a>
    //       </div>
    //       <div className=" mt-4 ml-6 text-sky-700">
    //         <a
    //           href="https://www.linkedin.com/in/khaled-sakr-a36b88267/"
    //           className="md:text-xl sm:text-base text-sm"
    //         >
    //           <img
    //             src="..\images\linkedin-original.svg"
    //             alt="instegram.png"
    //             className="md:h-7 sm:h-5 h-4 inline-block mr-3"
    //           />
    //           linkedIn
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </>
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
