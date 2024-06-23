import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface userState {
  user: any[];
}
const initialState: userState = {
  user: [
    {
      id: 285,
      userName: "khaled sakr",
      fullName: "khaled Ibrahem sakr",
      firstName: "khaled",
      lastName: "sakr",
      imageSrc: "/images/me.jpg",
      email: "khaledsakr12345@gmail.com",
      address: {
        companyName: "T-Empire Company",
        streetAddress: "the-central-street",
        governorate: "el Gharbia",
        cityOrTown: "baqlola.elsanta",
      },
      addressPref: "baqlola,elsanta,el Gharbia",
      phone: 201028577310,
      password: "123456",
    },
    {
      id: 300,
      fullName: "Islam Badran",
      firstName: "Islam",
      lastName: "Bdran",
      imageSrc: "/images/islam.jpg",
      email: "islambadran12345@gmail.com",
      address: {
        companyName: "the company",
        streetAddress: "the-central-street",
        governorate: "el Gharbia",
        cityOrTown: "elhessa.shabshear",
      },
      addressPref: "elhessa.shabshear,el Gharbia",
      phone: 201013919821,
      password: "123456",
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
export const { editInfoUser, editAddressUser, editImageUser } =
  userSlice.actions;
export default userSlice.reducer;
