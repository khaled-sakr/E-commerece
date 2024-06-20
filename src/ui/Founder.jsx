import { BiLogoFacebook, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";

function Founder() {
  return (
    <div className="flex sm:flex-row flex-col justify-center sm:space-x-9 pt-2 mt-16">
      <span className="sm:w-[20%] w-7/12 flex flex-col sm:m-0 m-auto">
        <img
          src="\images\manosur.jpg"
          alt="Mansour kora"
          className="rounded-md"
        />
        <h2 className="lg:text-3xl sm:text-lg md:text-2xl text-xl text-center  font-semibold my-2">
          Mansour kora
        </h2>
        <h5 className="lg:text-base sm:text-xs md:text-sm text-base text-center font-semibold ">
          Software Engineer
        </h5>
        <p className="sm:space-x-6 space-x-2 flex justify-center  my-2">
          <a href="https://www.facebook.com/kouradev">
            <BiLogoFacebook className="inline lg:text-xl sm:text-base text-xl text-black hover:text-white bg-transparent hover:bg-red-600 rounded-md p-1 lg:w-8  w-7 lg:h-8 h-7" />
          </a>
          <a href="https://www.linkedin.com/in/manssorr?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <BiLogoLinkedin className="inline lg:text-xl sm:text-base text-xl text-black hover:text-white bg-transparent hover:bg-red-600 rounded-md p-1 lg:w-8 w-7 lg:h-8  h-7" />
          </a>
          <a href="https://github.com/manssorr">
            <BiLogoGithub className="inline lg:text-xl sm:text-base text-xl text-black hover:text-white bg-transparent hover:bg-red-600 rounded-md p-1 lg:w-8 w-7 lg:h-8  h-7" />
          </a>
        </p>
      </span>{" "}
      <span className="sm:w-[20%] w-7/12 flex flex-col sm:m-0 m-auto">
        <img src="\images\me.jpg" alt="khaled sakr" className="rounded-md" />
        <h2 className="lg:text-3xl sm:text-lg md:text-2xl text-xl text-center  font-semibold my-2">
          Khaled sakr
        </h2>
        <h5 className="lg:text-base sm:text-xs md:text-sm text-base text-center font-semibold ">
          Front End Developer
        </h5>
        <p className="space-x-6 flex justify-center my-2">
          <a href="https://www.facebook.com/profile.php?id=100007482887939">
            <BiLogoFacebook className="inline lg:text-xl sm:text-base text-xl text-black hover:text-white bg-transparent hover:bg-red-600 rounded-md p-1 lg:w-8  w-7 lg:h-8 h-7" />
          </a>
          <a href="https://www.linkedin.com/in/khaled-sakr-a36b88267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <BiLogoLinkedin className="inline lg:text-xl sm:text-base text-xl text-black hover:text-white bg-transparent hover:bg-red-600 rounded-md p-1 lg:w-8  w-7 lg:h-8 h-7" />
          </a>
          <a href="https://github.com/khaled-sakr">
            <BiLogoGithub className="inline lg:text-xl sm:text-base text-xl text-black hover:text-white bg-transparent hover:bg-red-600 rounded-md p-1 lg:w-8  w-7 lg:h-8 h-7" />
          </a>
        </p>
      </span>{" "}
      <span className="sm:w-[20%] w-7/12 flex flex-col sm:m-0 m-auto">
        <img
          src="\images\eslam.jpg"
          alt="Eslam badran"
          className="rounded-md"
        />
        <h2 className="lg:text-3xl sm:text-lg md:text-2xl text-xl text-center  font-semibold my-2">
          Islam Badran
        </h2>
        <h5 className="lg:text-base sm:text-xs md:text-sm text-base text-center font-semibold ">
          Back End Developer
        </h5>
        <p className="space-x-6 flex justify-center my-2">
          <a href="https://www.facebook.com/islam.badran.77">
            <BiLogoFacebook className="inline lg:text-xl sm:text-base text-xl text-black hover:text-white bg-transparent hover:bg-red-600 rounded-md p-1 lg:w-8  w-7 lg:h-8 h-7" />
          </a>
          <a href="https://www.linkedin.com/in/islam-badran-39a577225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <BiLogoLinkedin className="inline lg:text-xl sm:text-base text-xl text-black hover:text-white bg-transparent hover:bg-red-600 rounded-md p-1 lg:w-8  w-7 lg:h-8 h-7" />
          </a>
          <a href="https://github.com/islam302/islam-badran/blob/main/README.md">
            <BiLogoGithub className="inline lg:text-xl sm:text-base text-xl text-black hover:text-white bg-transparent hover:bg-red-600 rounded-md p-1 lg:w-8  w-7 lg:h-8 h-7" />
          </a>
        </p>
      </span>
    </div>
  );
}

export default Founder;
