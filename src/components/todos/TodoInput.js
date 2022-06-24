import React from 'react';
import {useDispatch} from "react-redux";
import {addTodoThunk} from "../../reducers/todoSlice";

const TodoInput = () => {

    const dispatch = useDispatch()

    const clickAdd = () => {

        const todo = {title:"zsdfef", dueDate:"2022-06-24", writer:"user03"}

        dispatch(addTodoThunk(todo))
    }

    return (
        <div>
            <h3>Todo ADD</h3>
            <button onClick={clickAdd}>ADD</button>
            <hr/>
        </div>
    );
};

export default TodoInput;