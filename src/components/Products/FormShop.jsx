import React, { useState } from 'react';
import { ItemColor } from './Elements/ItemColor';


export const FormShop = () => {

    const [cantidad, setCantidad] = useState(1);
    const [inputColor, setInputColor] = useState('#00F');
    const [dataForm, setDataForm] = useState({
        size: 'XL'
    });


    const handleInputForm = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    const handleClickColor = (color) => {
        setInputColor(color);
    }


    const handleCantidad = (operator=1) => {
        const newCantidad = cantidad + operator;
        setCantidad(newCantidad < 1? 1: newCantidad);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputColor)
        console.log(dataForm)
        console.log(cantidad)
    }




    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend className="mb-1 text-sm font-medium">Color</legend>
                <div className="flow-root">
                    <div className="-m-0.5 flex flex-wrap">
                        <div className='mr-2'>
                            <ItemColor color={'#00F'} handleSelect={handleClickColor}/>
                        </div>
                        <div className='mr-2'>
                            <ItemColor color={'#000'} handleSelect={handleClickColor}/>
                        </div>
                        <div className='mr-2'>
                            <ItemColor color={'#fff'} handleSelect={handleClickColor}/>
                        </div>
                    </div>
                </div>
                <input type='hidden' name='color' value={inputColor}/>
            </fieldset>

            <div className="mt-12">
                <legend className="mb-1 text-sm font-medium">Talla</legend>

                <div className="flow-root">
                    <div className="-m-0.5 flex flex-wrap">

                        <label htmlFor="size_xl" className="cursor-pointer p-0.5">
                            <input type="radio" name="size" defaultValue="XL" id="size_xl" className="peer sr-only"
                                    defaultChecked={true}
                                    onChange={handleInputForm}
                            />
                            <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                                XL
                            </span>
                        </label>

                        <label htmlFor="size_sm" className="cursor-pointer p-0.5">
                            <input type="radio" name="size" defaultValue="SM" id="size_sm" className="peer sr-only"
                                    onChange={handleInputForm}/>
                            <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                                SM
                            </span>
                        </label>

                        <label htmlFor="size_s" className="cursor-pointer p-0.5">
                            <input type="radio" name="size" defaultValue="S" id="size_s" className="peer sr-only"
                                    onChange={handleInputForm}/>
                            <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                                S
                            </span>
                        </label>

                        <label htmlFor="size_m" className="cursor-pointer p-0.5">
                            <input type="radio" name="size" defaultValue="M" id="size_m" className="peer sr-only"
                                    onChange={handleInputForm}/>
                            <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                                M
                            </span>
                        </label>

                        <label htmlFor="size_l" className="cursor-pointer p-0.5">
                            <input type="radio" name="size" defaultValue="L" id="size_l" className="peer sr-only"
                                    onChange={handleInputForm}/>
                            <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                                L
                            </span>
                        </label>

                    </div>
                </div>
            </div>

            <div className='mt-12'>
                <legend className="mb-2 text-sm font-medium">Cantidad</legend>
                <div className='flex justify-start flex-row gap-4 mr-8'>
                    <button type='button' className='bg-gray-300 shadow shadow-slate-400 px-4 rounded-full'
                            onClick={() => handleCantidad(-1)}
                    >
                        -
                    </button>
                    <input type="number" min={1} name='cantidad' value={cantidad}
                        className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <button type='button' className='bg-gray-300 shadow shadow-slate-400 px-4 rounded-full'
                            onClick={() => handleCantidad(1)}
                    >+
                    </button>
                </div>
            </div>

            <div className="mt-12 flex">
                <button type="submit"
                        className="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500">
                    Agregar al carrito de compras
                </button>
            </div>

        </form>
    )
}
