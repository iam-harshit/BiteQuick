import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const appStore = configureStore({
    // This reducer belongs to our store which is connects to slice
    // Here reducer name means this store have one big reducer but having multiple small reducers.
    reducer:{
        cart: cartSlice
    }
});

export default appStore;