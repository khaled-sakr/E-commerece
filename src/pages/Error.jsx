import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <p className="sm:w-9/12 w-11/12 md:text-xs sm:text-[10px] text-[8px] mx-auto  text-stone-500 py-8 md:py-10 lg:py-12 ">
        <Link to="/">Home / </Link>
        <p className="font-bold inline-block text-black"> 404 Error</p>
      </p>
      <div className="sm:w-8/12 w-11/12 p-10  mx-auto text-center  ">
        <h1 className="xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl xs:text-3xl text-xl font-[400] my-6">
          404 Not Found
        </h1>
        <h5 className="lg:text-sm md:text-xs sm:text-[10px] text-[8px] font-[500] my-6">
          Your visted page not found You may go to home page
        </h5>
        <Link
          to="/"
          className="lg:w-4/12 xs:w-5/12 w-6/12 mx-auto block lg:text-xs md:text-[10px] xs:text-[8px] text-[6px] font-[400] md:px-10 xs:px-8 px-4 md:py-3 py-2 rounded-[3px] bg-[#DB4444] text-white my-10"
        >
          Back to home page
        </Link>
      </div>
    </div>
  );
}

export default Error;
