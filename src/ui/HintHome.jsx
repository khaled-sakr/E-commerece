function HintHome({ children }) {
  return (
    <h4 className="sm:mt-16 mt-6 relative h-8 sm:w-9/12 w-[95%] sm:px-6 px-[10px] sm:pt-1 pt-[5px] sm:mx-auto mx-2 text-red-500 md:text-sm sm:text-[12px] text-[10px] font-semibold before:bg-red-500 sm:before:w-4 before:w-2 sm:before:h-7 before:h-4 sm:before:top-0 before:top-1 sm:before:left-[2px] before:left-[-3px] before:absolute before:rounded-sm ">
      {children}
    </h4>
  );
}

export default HintHome;
