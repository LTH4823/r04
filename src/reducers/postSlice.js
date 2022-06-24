
import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit/";
import {addPostAjax, getPostListAjax} from "../api/postAPI";

export const getPostListThunk = createAsyncThunk("post/list", getPostListAjax)

export const addPostThunk = createAsyncThunk("post/add", addPostAjax)



const postSlice = createSlice({

    name: "PostSlice",
    initialState: {
        posts: [],
        refresh:false
    },
    extraReducers: {
        [getPostListThunk.fulfilled]: (state, action) => {
            console.log(state)
            console.log(action)
            console.log("-------------")
            return {posts: action.payload}
        },
        [addPostThunk.fulfilled]: (state, action) => {
            console.log("add Post success")
            return {...state, refresh:!state.refresh}
        },
    }

})

export default postSlice.reducer