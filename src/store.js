import { configureStore } from "@reduxjs/toolkit";
import productslice from "./Redux/productslice";
import cartslice from "./Redux/cartslice";
import authslice from "./Redux/authslice";

export const store=configureStore({
    reducer:{
        products:productslice,
        cart:cartslice,
        authstate:authslice
    }
})