import React from 'react';
import {useSelector} from "react-redux";
import TodoListPagination from "./TodoListPagination";

const TodoList = () => {

    const {dtoList} = useSelector(state => state.todo)

    return (
        <div>
            <ul>
                {dtoList.map( ({tno, title, dueDate, writer}) => <li key={tno}>{title}--{writer}--{dueDate}</li>)}
            </ul>
            <TodoListPagination/>
        </div>
    );
};

export default TodoList;