import React, {useEffect} from 'react';
import TodoList from "./TodoList";
import {useDispatch} from "react-redux";
import {getTodoListThunk} from "../../reducers/todoSlice";
import TodoInput from "./TodoInput";

const Todos = () => {

    const dispatch = useDispatch()

    useEffect(()=>{

        dispatch(getTodoListThunk(1))

    },[])

    return (
        <div>
            <TodoInput/>
            <h1>Todos</h1>
            <TodoList/>
        </div>
    );
};

export default Todos;