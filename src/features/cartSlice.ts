import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Flip, toast } from "react-toastify";

interface cartState {
  coupon: number;
  price: number;
  cart: any[];
  order: any[];
}
const initialState: cartState = {
  price: 0,
  cart: [],
  coupon: 1,
  order: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    calcPrice: (state) => {
      state.price = state.cart.reduce((priceCart, product) => {
        return (
          priceCart +
          (product.price - (product.discount * product.price) / 100) *
            product.amount *
            state.coupon
        );
      }, 0);
    },
    applicationCoupon: (state) => {
      state.coupon = 0.5;
      cartSlice.caseReducers.calcPrice(state);
    },
    resetCoupon: (state) => {
      state.coupon = 1;
      cartSlice.caseReducers.calcPrice(state);
    },
    addItem: (
      state,
      action: PayloadAction<{
        product: object;
        color: string;
        size: string;
        amount: number;
      }>
    ) => {
      state.cart.push({
        ...action.payload,
      });
    },
    clearCart: (state) => {
      state.order = state.cart;
      state.cart = [];
      toast.success(`Your Order had been sumbitted 👌`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
    },
    clearOrder: (state) => {
      state.order = [];
    },
    deleteProduct: (
      state,
      action: PayloadAction<{
        categoryId: string;
        id: string;
        size: string;
        color: string;
        amount: number;
      }>
    ) => {
      const target = state.cart.find(
        (product) =>
          product.categoryId === action.payload.categoryId &&
          product.id === action.payload.id &&
          product.size === action.payload.size &&
          product.color === action.payload.color &&
          product.amount === action.payload.amount
      );
      state.cart = state.cart.filter((prod) => prod !== target);
      cartSlice.caseReducers.calcPrice(state);
    },
    changeAmount: (
      state,
      action: PayloadAction<{
        categoryId: string;
        id: string;
        size: string;
        color: string;
        amount: number;
        inc: boolean;
      }>
    ) => {
      const target = state.cart.find(
        (product) =>
          product.categoryId === action.payload.categoryId &&
          product.id === action.payload.id &&
          product.size === action.payload.size &&
          product.color === action.payload.color &&
          product.amount === action.payload.amount
      );
      // console.log(target.amount);
      if (action.payload.inc) {
        target.amount++;
        cartSlice.caseReducers.calcPrice(state);
      } else {
        target.amount--;
        cartSlice.caseReducers.calcPrice(state);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        addItemAsync.fulfilled,
        (
          state,
          action: PayloadAction<{
            product: object;
            color: string;
            size: string;
            amount: number;
          }>
        ) => {
          toast.success(`This product has been added to the Cart`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
          });
          state.cart.push({
            ...action.payload,
          });
          cartSlice.caseReducers.calcPrice(state);
        }
      )
      // .addCase(clearCartAsync.fulfilled, (state) => {
      //   toast.success(`Your Order had been sumbitted 👌`, {
      //     position: "top-center",
      //     autoClose: 3000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "colored",
      //     transition: Flip,
      //   });
      //   state.order = state.cart;
      //   state.cart = [];
      // })
      .addCase(applicationCouponAsync.fulfilled, (state) => {
        toast.success(`Coupon had been applyed`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Flip,
        });
        state.coupon = 0.5;
        cartSlice.caseReducers.calcPrice(state);
      });
  },
});

export const addItemAsync = createAsyncThunk(
  "cartSlice/addItemAsync",
  async (cart: any) => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return cart;
  }
);
// export const clearCartAsync = createAsyncThunk(
//   "cartSlice/clearCartAsync",
//   async (order: any) => {
//     await new Promise((resolve) => setTimeout(resolve, 300));
//     return order;
//   }
// );
export const applicationCouponAsync = createAsyncThunk(
  "cartSlice/applicationCouponAsync",
  async (cart: any) => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return cart;
  }
);
export const {
  addItem,
  deleteProduct,
  calcPrice,
  changeAmount,
  applicationCoupon,
  clearCart,
  clearOrder,
  resetCoupon,
} = cartSlice.actions;
export default cartSlice.reducer;
