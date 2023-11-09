import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './myCart';

export const store = configureStore({
    reducer: {
        cart: cartReducer, 
    },
});