function AdressPage({ firstAddress, secAddress }) {
  return (
    <>
      {" "}
      <h3 className="sm:w-9/12 w-11/12 text-stone-500 md:text-xs sm:text-[10px] text-[8px] mx-auto pt-8 md:pt-10 lg:pt-12">
        {firstAddress}{" "}
        <p className="font-bold inline-block text-black"> {secAddress} </p>
      </h3>
    </>
  );
}

export default AdressPage;
