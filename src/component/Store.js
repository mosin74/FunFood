import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../../utils/CartSlice";

const store = configureStore({
    reducer: {
        cart: CartSlice,
    },
});

export default store;