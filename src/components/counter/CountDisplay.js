import React from 'react';
import {useSelector} from "react-redux";

const CountDisplay = () => {
    const {num} = useSelector(state => state.count)
    return (
        <div>
            <h2>CountDisplay {num}</h2>
        </div>
    );
};

export default CountDisplay;