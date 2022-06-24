import React from 'react';
import {useDispatch} from "react-redux";
import {addPostThunk} from "../../reducers/postSlice";

const PostInput = () => {

    const dispatch = useDispatch()

    const clickAdd = () => {
        const post = {title:'CCCCC',author:'ZZZ'}

        dispatch(addPostThunk(post))
    }


    return (
        <div>
            <button onClick={clickAdd}>ADD POST</button>
        </div>
    );
};

export default PostInput;