import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Flip, toast } from "react-toastify";

interface userState {
  user: any[];
}
const initialState: userState = {
  user: [
    {
      id: 285,
      fullName: "khaled Ibrahem sakr",
      firstName: "khaled",
      lastName: "sakr",
      imageSrc: "/images/me.jpg",
      email: "khaled.ibrahem.sakr@gmail.com",
      address: {
        companyName: "T-Empire Company",
        streetAddress: "the-central-street",
        governorate: "el Gharbia",
        cityOrTown: "baqlola.elsanta",
      },
      addressPref: "baqlola,elsanta,el Gharbia",
      phone: 201028577310,
      password: "11223344",
      // imageBool: true,
    },
    {
      id: 300,
      fullName: "khaled Ibrahem sakr",
      firstName: "khaled",
      lastName: "sakr",
      imageSrc: "/images/me.jpg",
      email: "khaled.ibrahem.sakr@gmail.com",
      address: {
        companyName: "the company",
        streetAddress: "the-central-street",
        governorate: "el Gharbia",
        cityOrTown: "baqlola.elsanta",
      },
      addressPref: "baqlola,elsanta,el Gharbia",
      phone: 201028577310,
      password: "11223344",
    },
  ],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    editInfoUser: (
      state,
      action: PayloadAction<{ userIfo: object; id: number; password: string }>
    ) => {
      const targetUser = state.user.findIndex(
        (user) => user.id === action.payload.id
      );
      state.user[targetUser] = {
        ...state.user[targetUser],
        ...action.payload.userIfo,
        password: action.payload.password,
      };
    },
    editAddressUser: (
      state,
      action: PayloadAction<{ userAddress: object; id: number }>
    ) => {
      const targetUser = state.user.findIndex(
        (user) => user.id === action.payload.id
      );
      state.user[targetUser] = {
        ...state.user[targetUser],
        ...action.payload.userAddress,
      };
    },
    editImageUser: (
      state,
      action: PayloadAction<{ image: any; id: number; imageName: any }>
    ) => {
      const targetUser = state.user.findIndex(
        (user) => user.id === action.payload.id
      );
      const image = URL.createObjectURL(action.payload.image);
      const imageName = action.payload.image.name;
      state.user[targetUser] = {
        ...state.user[targetUser],
        imageSrc: image,
        imageName: imageName,
      };
    },
  },
});
// resetCoupon: (state) => {
//   state.coupon = 1;
//   userSlice.caseReducers.calcPrice(state);
// },
// addItem: (
//   state,
//   action: PayloadAction<{
//     product: object;
//     color: string;
//     size: string;
//     amount: number;
//   }>
// ) => {
//   state.cart.push({
//     ...action.payload,
//   });
// },
// clearCart: (state) => {
//   state.order = state.cart;
//   state.cart = [];
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
// },
// clearOrder: (state) => {
//   state.order = [];
// },
//     deleteProduct: (
//       state,
//       action: PayloadAction<{
//         categoryId: string;
//         id: string;
//         size: string;
//         color: string;
//         amount: number;
//       }>
//     ) => {
//       const target = state.cart.find(
//         (product) =>
//           product.categoryId === action.payload.categoryId &&
//           product.id === action.payload.id &&
//           product.size === action.payload.size &&
//           product.color === action.payload.color &&
//           product.amount === action.payload.amount
//       );
//       state.cart = state.cart.filter((prod) => prod !== target);
//       userSlice.caseReducers.calcPrice(state);
//     },
//     changeAmount: (
//       state,
//       action: PayloadAction<{
//         categoryId: string;
//         id: string;
//         size: string;
//         color: string;
//         amount: number;
//         inc: boolean;
//       }>
//     ) => {
//       const target = state.cart.find(
//         (product) =>
//           product.categoryId === action.payload.categoryId &&
//           product.id === action.payload.id &&
//           product.size === action.payload.size &&
//           product.color === action.payload.color &&
//           product.amount === action.payload.amount
//       );
//       // console.log(target.amount);
//       if (action.payload.inc) {
//         target.amount++;
//         userSlice.caseReducers.calcPrice(state);
//       } else {
//         target.amount--;
//         userSlice.caseReducers.calcPrice(state);
//       }
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(
//         addItemAsync.fulfilled,
//         (
//           state,
//           action: PayloadAction<{
//             product: object;
//             color: string;
//             size: string;
//             amount: number;
//           }>
//         ) => {
//           toast.success(`This product has been added to the Cart`, {
//             position: "top-center",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "colored",
//             transition: Flip,
//           });
//           state.cart.push({
//             ...action.payload,
//           });
//           userSlice.caseReducers.calcPrice(state);
//         }
//       )
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
//       .addCase(applicationCouponAsync.fulfilled, (state) => {
//         toast.success(`Coupon had been applyed`, {
//           position: "top-center",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "colored",
//           transition: Flip,
//         });
//         state.coupon = 0.5;
//         userSlice.caseReducers.calcPrice(state);
//       });
//   },
// });

// export const addItemAsync = createAsyncThunk(
//   "userSlice/addItemAsync",
//   async (cart: any) => {
//     await new Promise((resolve) => setTimeout(resolve, 100));
//     return cart;
//   }
// );
// export const clearCartAsync = createAsyncThunk(
//   "userSlice/clearCartAsync",
//   async (order: any) => {
//     await new Promise((resolve) => setTimeout(resolve, 300));
//     return order;
//   }
// );
// export const applicationCouponAsync = createAsyncThunk(
//   "userSlice/applicationCouponAsync",
//   async (cart: any) => {
//     await new Promise((resolve) => setTimeout(resolve, 300));
//     return cart;
//   }
// );
export const { editInfoUser, editAddressUser, editImageUser } =
  userSlice.actions;
export default userSlice.reducer;
