import {configureStore} from "@reduxjs/toolkit";
import countSlice from "../reducers/countSlice";
import postSlice from "../reducers/postSlice";

export default configureStore({
    reducer: {
        count: countSlice,
        post: postSlice
    }
})