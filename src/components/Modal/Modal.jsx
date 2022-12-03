import React from 'react';
import { createPortal } from 'react-dom';



export const Modal = ({children, visible=false, setIsVisible}) => {

    const stylesModal = {
        backgroundColor: 'rgb(0 0 0 / 0.5)'
    }

    const styles = {
        height: '580px'
    }


    return createPortal(
        <>
            {visible &&
            (
            <div className='fixed left-0 top-0 w-full h-full flex justify-center items-center z-20' style={stylesModal}>
                <div className='relative flex justify-center items-center' style={styles}>
                    {children}
                    <div className='absolute -top-4 sm:top-0 right-1'>
                        <button className='w-10 h-10 bg-red-500 rounded-full cursor-pointer text-center text-cyan-50' onClick={() => setIsVisible(false)}> x </button>
                    </div>
                </div>
            </div>
            )}
        </>,
        document.getElementById("custom-modal")
    );
}