import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removePostThunk} from "../../reducers/postSlice";

const PostsList = () => {

    const {posts} = useSelector(state => state.post)

    const dispatch = useDispatch()

    return (
        <div>

            <ul>

                {posts.map(({id,title,author}) => <li key={id}>{id}-----------------{title}
                <button onClick={()=>dispatch(removePostThunk(id))}>DEL</button>
                </li>)}

            </ul>

        </div>
    );
};

export default PostsList;