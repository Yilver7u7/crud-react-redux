import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./users/slice";

export const store = configureStore ({
    reducer:{
        users: userReducer,
    }
})
