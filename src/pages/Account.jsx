import { Link } from "react-router-dom";
import DetailsAcc from "../ui/DetailsAcc";
import AdressAcc from "../ui/AdressAcc";
import AdressPage from "../ui/AdressPage";
import { useConFast } from "../Context/ContextProject";

function Account() {
  const { detailsShow, setdetailsShow } = useConFast();
  return (
    <>
      <AdressPage firstAddress="Home/" secAddress=" My Account" />
      <div className="sm:w-9/12 mt-14 w-[96%] mx-auto flex flex-row lg:justify-start justify-between">
        <div className="md:w-4/12 w-5/12 flex flex-col">
          <span className="space-y-3 font-semibold mb-6">
            <h1 className="sm:text-lg xs:text-base text-xs font-semibold">
              Manage My Acoount
            </h1>
            <button
              onClick={() => setdetailsShow(() => true)}
              className={`block xs:text-xs  sm:text-sm text-[10px] sm:ml-8 xs:ml-5 ml-3 hover:text-red-500 ${
                detailsShow ? ` text-[#ED4444]` : `text-stone-400`
              } `}
            >
              My Profile
            </button>
            <button
              onClick={() => setdetailsShow(() => false)}
              className={`block xs:text-xs  sm:text-sm text-[10px] sm:ml-8 xs:ml-5 ml-3 hover:text-[#ED4444] ${
                !detailsShow ? ` text-[#ED4444]` : `text-stone-400`
              } `}
            >
              Address Book
            </button>
          </span>
          <span className="space-y-3 font-semibold mb-6">
            <h1 className="sm:text-lg xs:text-base text-xs font-semibold">
              My WishList
            </h1>
            <Link
              to="/favourite"
              className="xs:text-xs  sm:text-sm text-[10px] text-stone-400 sm:ml-8 xs:ml-5 ml-3 hover:text-[#ED4444]"
            >
              Favourite
            </Link>
          </span>
        </div>
        {detailsShow ? <DetailsAcc /> : <AdressAcc />}
      </div>
    </>
  );
}

export default Account;
