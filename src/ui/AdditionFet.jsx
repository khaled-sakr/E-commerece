import {
  LiaHeadphonesSolid,
  LiaShieldAltSolid,
  LiaShuttleVanSolid,
} from "react-icons/lia";

function AdditionFet() {
  return (
    <div className="flex xs:flex-row flex-col md:w-11/12 sm:w-10/12 w-full mx-auto sm:mt-16 mt-10 sm:mb-28 mb-14 justify-center xs:space-x-10  sm:space-x-16  xs:space-y-0 space-y-14">
      <span className="flex flex-col space-y-3">
        <span className="sm:h-20 h-28 text-center md:mx-2 mx-auto ">
          <p className="mt-3 bg-gray-400 inline-block p-1 rounded-full">
            <LiaShuttleVanSolid className="inline-block text-3xl border rounded-full p-1 sm:w-10 sm:h-10 w-8 h-8 bg-black text-white" />
          </p>
          <h3 className="sm:text-base text-xs font-bold mt-4 mb-1">
            FREE AND FAST DELIVERY
          </h3>
          <p className="sm:text-xs text-[10px] font-semibold">
            Free delivery for all orders over 150$
          </p>
        </span>
      </span>
      <span className="flex flex-col space-y-3">
        <span className="sm:h-20 h-28 text-center md:mx-2 mx-auto ">
          <p className="mt-3 bg-gray-400 inline-block p-1 rounded-full">
            <LiaHeadphonesSolid className="inline-block text-3xl border rounded-full p-1 sm:w-10 sm:h-10 w-8 h-8 bg-black text-white" />
          </p>
          <h3 className="sm:text-base text-xs font-bold mt-4 mb-1">
            24/7 CUSTOMERS SURVICE
          </h3>
          <p className="sm:text-xs text-[10px] font-semibold">
            Friendly 24/7 customer support
          </p>
        </span>
      </span>
      <span className="flex flex-col space-y-3 ">
        <span className="sm:h-20 h-28 text-center md:mx-2 mx-auto ">
          <p className="mt-3 bg-gray-400 inline-block p-1 rounded-full">
            <LiaShieldAltSolid className="inline-block text-3xl border rounded-full p-1 sm:w-10 sm:h-10 w-8 h-8 bg-black text-white" />
          </p>
          <h3 className="sm:text-base text-xs font-bold mt-4 mb-1">
            MONEY BACK GUARANT
          </h3>
          <p className="sm:text-xs text-[10px] font-semibold">
            We return money within 30 days
          </p>
        </span>
      </span>
    </div>
  );
}

export default AdditionFet;
