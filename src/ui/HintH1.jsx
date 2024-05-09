import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const buttonStyle =
  "md:text-3xl sm:text-2xl text-xl text-stone-900 hover:text-stone-600 disabled:text-stone-500 ";
function HintH1({ children, previous, next, numberPros }) {
  return (
    <div className="flex justify-between relative ">
      <h1 className="h-fit flex text-black md:text-text-lg lg:text-2xl text-base sm:text-base font-[600] sm:py-5 py-2 ml-3">
        {children}
        {numberPros}
      </h1>
      <span className="sm:space-x-3 space-x-2 sm:mr-0 mr-7 my-auto">
        <button onClick={() => previous()} className={`${buttonStyle}`}>
          <BsArrowLeftCircle />
        </button>
        <button onClick={() => next()} className={`${buttonStyle}`}>
          <BsArrowRightCircle />
        </button>
      </span>
    </div>
  );
}
export default HintH1;
