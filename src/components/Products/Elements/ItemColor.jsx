import React from 'react';

export const ItemColor = ({color, handleSelect}) => {

    const style = {
        backgroundColor: color
    }

    return (
        <div className='cursor-pointer p-4 shadow-md shadow-black'
             style={style}
             onClick={() => handleSelect(color)}>
        </div>
    )
}
