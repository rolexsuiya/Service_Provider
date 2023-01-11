import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const {
        id,
        company,
        catagory,
        Name,
        code,
        doorNum,
        addOne,
        addTwo,
        landMark,
        area,
        city,
        country,
        stateIn,
        pinCode,
        telePhone,
        mobile,
        email,
      } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        existingUser.company = company;
        existingUser.catagory = catagory;
        existingUser.Name = Name;
        existingUser.code = code;
        existingUser.doorNum = doorNum;
        existingUser.addOne = addOne;
        existingUser.addTwo = addTwo;
        existingUser.landMark = landMark;
        existingUser.area = area;
        existingUser.city = city;
        existingUser.stateIn = stateIn;
        existingUser.country = country;
        existingUser.pinCode = pinCode;
        existingUser.telePhone = telePhone;
        existingUser.mobile = mobile;
        existingUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        return state.filter((user) => user.id !== id);
      }
    },

  },
});

export const { addUser, deleteUser, editUser, sortTableData } =
  userSlice.actions;
export default userSlice.reducer;
