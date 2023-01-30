import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    userData: [],
    editUser: {},
    userDetails: {
      company: "",
      catagory: "",
      Name: "",
      code: "",
      images: "",
      description: "",
      doorNum: "",
      addOne: "",
      addTwo: "",
      landMark: "",
      area: "",
      city: "",
      stateIn: "",
      country: "",
      pinCode: "",
      telePhone: "",
      mobile: "",
      email: "",
      id: "",
      error: {
        company: "",
        catagory: "",
        Name: "",
        code: "",
        doorNum: "",
        addOne: "",
        addTwo: "",
        landMark: "",
        area: "",
        city: "",
        stateIn: "",
        country: "",
        pinCode: "",
        telePhone: "",
        mobile: "",
        email: "",
      },
    },
  },
  reducers: {
    addUser: (state, action) => {
      console.log(action.payload, "adduser");
      state.userData = action.payload;
      return state;
    },
    editUser: (state, action) => {
      state.editUser = action.payload;

      console.log(action.payload, "edituser");
      return state;
    },
  },
});

export const { addUser, editUser } = userSlice.actions;
export default userSlice.reducer;
