import React from 'react';
import {useDispatch} from "react-redux";
import {inc} from "../../reducers/countSlice";

const CountButtons = () => {

    const dispath = useDispatch()

    const clickAdd = () =>{
        dispath(inc())
    }

    return (
        <div>
            <button onClick={clickAdd}>++</button>
            <button>--</button>
        </div>
    );
};

export default CountButtons;