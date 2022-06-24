import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPostListThunk} from "../../reducers/postSlice";
import PostsList from "./PostsList";
import PostInput from "./PostInput";

const Posts = () => {

    const dispatch = useDispatch()



    useEffect(()=>{
        dispatch(getPostListThunk())
    },[])

    return (
        <div>
            <h1>Posts Component</h1>
            <PostInput></PostInput>
            <PostsList></PostsList>

        </div>
    );
};

export default Posts;