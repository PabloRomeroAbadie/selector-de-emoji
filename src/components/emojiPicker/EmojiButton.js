import React from 'react';

const EmojiButton = ({emoji, onClick}) => {

    function handleClick() {
        onClick(emoji);
    }

    return (
        <button onClick={handleClick}>{emoji.symbol}</ button>
    );
};

export default EmojiButton;