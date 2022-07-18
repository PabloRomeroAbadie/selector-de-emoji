import React, { useRef } from 'react';
import EmojiPicker from './EmojiPicker';

const EmpojiPickerInput = () => {

    const refInput = useRef(null);

    function handleClick (){
        refInput.current.focus();
    }

    return (
        <div> 
            <input ref={refInput} />   
            <button onClick={handleClick}>Da click</button>
            <EmojiPicker />
        </div>
    )
};

export default EmpojiPickerInput;