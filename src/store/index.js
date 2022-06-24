import {configureStore} from "@reduxjs/toolkit";
import countSlice from "../reducers/countSlice";
import postSlice from "../reducers/postSlice";
import todoSlice from "../reducers/todoSlice";

export default configureStore({
    reducer: {
        count: countSlice,
        post: postSlice,
        todo:todoSlice
    }
})