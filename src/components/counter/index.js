import React from 'react';
import CountDisplay from "./CountDisplay";
import CountButtons from "./CountButtons";

const Counter = () => {
    return (
        <div>
            <h2>Counter Component</h2>
            <CountDisplay></CountDisplay>
            <CountButtons></CountButtons>
        </div>
    );
};

export default Counter;