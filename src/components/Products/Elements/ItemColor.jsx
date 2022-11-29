import React from 'react';

export const ItemColor = ({color}) => {

    const style = {
        backgroundColor: color
    }

    return (
        <div className='group cursor-pointer p-4 shadow-lg shadow-black peer-checked:shadow-gray-300'
             style={style}>
        </div>
    )
}
