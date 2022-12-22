import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  UsersData: [
    {
      Username: "Akshay",
      Email: "akshay@test.com",
      Password: "Asdfgh@121",
      token: "aoidnasodiniasodn"
    },
    {
      Username: "Test",
      Email: "Test@test.com",
      Password: "Asdfgh@121",
      token: "oasidnasoidnpinr"
    }
  ],
  token: ""
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login(state, action) {
      state.token = action.payload;
    },
    logout(state) {
      state.token = "";
    },
    SignUp(state, action) {
      const users = state.UsersData;
      const newUsers = [...users, action.payload];

      state.UsersData = newUsers;
      state.token = action.payload.token;

      console.log(action.payload.profile);

      const CurrentUser = {
        Username: action.payload.Username,
        Email: action.payload.Email,
        token: "oasidnasoidnpinr",
        profile: action.payload.profile
      };
      localStorage.removeItem("authData");
      localStorage.setItem("authData", JSON.stringify(newUsers));
      localStorage.setItem("CurrentUser", JSON.stringify(CurrentUser));
    }
  }
});

const authActions = authSlice.actions;
export default authActions;
