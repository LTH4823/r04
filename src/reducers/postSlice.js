import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {addPostAjax, getPostListAjax, removePostAjax} from "../api/postAPI";

export const getPostListThunk = createAsyncThunk("post/list",getPostListAjax)

export const addPostThunk = createAsyncThunk("post/add", async (post) => {

    const res = await addPostAjax(post)

    return getPostListAjax()

})

export const removePostThunk = createAsyncThunk("post/remove", async (post) => {

    const res = await removePostAjax(post)

    return getPostListAjax()

})
const postSlice = createSlice({
    name :"PostSlice",
    initialState:{
        posts:[],
        refresh:false
    },
    extraReducers:{
        //비동기할때는 그냥 reducer대신 이거씀
        [getPostListThunk.fulfilled]: (state, action) =>{
            //.fulfilled << 비동기 작업 결과 왓을때
            return {posts: action.payload}
        },
        [addPostThunk.fulfilled]: (state, action) =>{
            //.fulfilled << 비동기 작업 결과 왓을때
            console.log("add post success")
            return {posts: action.payload}
        },
        [removePostThunk.fulfilled]: (state, action) =>{
            //.fulfilled << 비동기 작업 결과 왓을때
            console.log("remove post success")
            return {posts: action.payload}
        },

    }
})

export default postSlice.reducer