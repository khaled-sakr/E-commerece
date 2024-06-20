import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct, changeAmount, calcPrice } from "../features/cartSlice";
function ProductInCart({ product }) {
  const dispatch = useDispatch();
  const { id, categoryId, size, color, amount } = product;
  return (
    <div className="w-full mt-8 h-16 flex justify-between text-sm  py-4">
      <span className="w-5/12 space-x-2">
        <img
          src={product.srcOne}
          alt="t-shirt"
          className="xs:w-9 w-5 inline ml-1"
        />
        <Link
          to={`/category/${product.categoryId}/product/${product.id}`}
          className="lg:text-xs xs:text-[10px] text-[8px] relative after:absolute after:w-0 after:duration-300 hover:after:w-full after:h-[1px] after:left-0 after:bg-black after:top-5 cursor-pointer"
        >
          {product.name},{product.color},{product.size}
        </Link>
      </span>
      <span className="w-4/12 pt-2 lg:text-sm xs:text-xs text-[10px]">
        ${product.price - product.price * (product.discount / 100)}
      </span>
      <span className="w-3/12 pt-2 z-10 lg:text-sm xs:text-xs text-[10px]">
        <p className="flex justify-between border-stone-300 border md:w-5/12 xs:w-6/12 w-8/12 rounded-[3px]">
          <button
            onClick={() => {
              if (amount !== 1) {
                dispatch(
                  changeAmount({
                    categoryId,
                    id,
                    size,
                    color,
                    amount,
                    inc: false,
                  })
                );
              } else {
                dispatch(
                  deleteProduct({
                    categoryId,
                    id,
                    size,
                    color,
                    amount,
                  })
                );
              }
            }}
            className="sm:text-base text-[12px] border-r hover:bg-stone-200"
          >
            <MdOutlineKeyboardArrowLeft />
          </button>
          <span className="lg:text-sm sm:text-[12px] text-[12px]">
            {amount}
          </span>
          <button
            className="sm:text-base text-[12px] border-l hover:bg-stone-200"
            onClick={() => {
              dispatch(
                changeAmount({
                  categoryId,
                  id,
                  size,
                  color,
                  amount,
                  inc: true,
                })
              );
            }}
          >
            <MdOutlineKeyboardArrowRight />
          </button>
        </p>
      </span>
      <span className="w-2/12 pt-2 pl-3 lg:text-sm xs:text-xs text-[10px]">
        $ {(product.price - (product.price * product.discount) / 100) * amount}
      </span>
      <button
        onClick={() => {
          dispatch(
            deleteProduct({
              categoryId,
              id,
              size,
              color,
              amount,
            })
          );
          dispatch(calcPrice());
        }}
        className="hover:text-red-200 inline-flex justify-center sm:pt-1 xs:pt-1 pt-2  text-red-600 lg:text-base xs:text-sm text-xs  mx-auto sm:mr-3 font-semibold cursor-pointer hover:bg-red-600 px-2 rounded-sm"
      >
        x
      </button>
    </div>
  );
}

export default ProductInCart;
