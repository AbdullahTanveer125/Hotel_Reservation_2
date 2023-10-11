import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Feature/auth/authSlice";
import goalReducer from "../Feature/goals/goalSlice";


const store=configureStore({
    reducer:{
        auth:authReducer,
        goals:goalReducer,
    },
});




export default store;