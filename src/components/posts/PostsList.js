import React from 'react';
import {useSelector} from "react-redux";

const PostsList = () => {

    const {posts} = useSelector(state => state.post)


    return (
        <div>

            <ul>

                {posts.map(({id,title,author}) => <li key={id}>{title}</li>)}

            </ul>

        </div>
    );
};

export default PostsList;