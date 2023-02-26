import React from 'react';
import { useStateContext } from '../context/ContextProvider';

const Button = ({icon, bgHoverColor, width, bgColor, color, size, text, borderRadius}) => {
    const { setIsClicked, initialState } = useStateContext();
    return (
        <button
            type='button'
            onClick={() => setIsClicked(initialState)}
            style={{ backgroundColor:bgColor, color, borderRadius }}
            className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
        >
           { icon } { text }
        </button>
    )
};

export default Button