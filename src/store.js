import {configureStore} from "@reduxjs/toolkit";
import {updateCart} from "./redux/updateCart";

export default configureStore({
    reducer: {
        updateCart: updateCart.reducer
    }
})