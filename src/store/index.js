import {configureStore} from "@reduxjs/toolkit";
import countSlice from "../reducers/countSlice";

export default configureStore({
    reducer: {
        count: countSlice
    }
})