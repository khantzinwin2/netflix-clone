import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./services/userSlice";

export const store =  configureStore({
    reducer:{
        user: userSlice,
    }
})