import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sesion } from '../../helpers/sesion';
import { addOrder } from '../../redux/features/order/orderSlice';
import { ItemColor } from './Elements/ItemColor';


export const FormShop = ({product, img, typesColor, colorSelect, setColorSelect}) => {

    const dispatch = useDispatch();

    const { orders } = useSelector(state => state.order);
    const incluido = orders.find(order => order.id === product.id);

    const [cantidad, setCantidad] = useState(1);
    const [dataForm, setDataForm] = useState({
        size: 'XL',
        color: typesColor[0].color
    });

    useEffect(() => {
        setColorSelect(typesColor[0].color);
        setDataForm({
            ...dataForm,
            color: typesColor[0].color
        })
    }, [typesColor])
    

    const handleInputForm = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }


    const handleCantidad = (operator=1) => {
        const newCantidad = cantidad + operator;
        setCantidad(newCantidad < 1? 1: newCantidad);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(sesion() && !incluido) {
            dispatch(addOrder({
                id: product.id,
                for: product.for,
                category: product.category,
                name: product.name,
                price: product.price,
                color: dataForm.color,
                img,
                talla: dataForm.size,
                cant: cantidad
            }))
        }
    }




    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend className="mb-1 text-sm font-medium">Color</legend>
                <div className="flow-root">
                    <div className="-m-0.5 flex flex-wrap">
                        {
                            typesColor.map((item, index) => (
                                <label className='mr-2' key={index}>
                                    <input type="radio" name="color" value={item.color} className="peer sr-only"
                                            checked={item.color === colorSelect}
                                            onClick={(e) => {
                                                handleInputForm(e);
                                                setColorSelect(item.color)
                                            }}
                                    />
                                    <ItemColor color={item.color}/>
                                </label>
                            ))
                        }
                    </div>
                </div>
            </fieldset>

            <div className="mt-12">
                <legend className="mb-1 text-sm font-medium">Talla</legend>

                <div className="flow-root">
                    <div className="-m-0.5 flex flex-wrap">

                        <label htmlFor="size_xl" className="cursor-pointer p-0.5">
                            <input type="radio" name="size" value="XL" id="size_xl" className="peer sr-only" readOnly
                                    defaultChecked
                                    onChange={handleInputForm}
                            />
                            <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                                XL
                            </span>
                        </label>

                        <label htmlFor="size_sm" className="cursor-pointer p-0.5">
                            <input type="radio" name="size" value="SM" id="size_sm" className="peer sr-only" readOnly
                                    onChange={handleInputForm}/>
                            <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                                SM
                            </span>
                        </label>

                        <label htmlFor="size_s" className="cursor-pointer p-0.5">
                            <input type="radio" name="size" value="S" id="size_s" className="peer sr-only" readOnly
                                    onChange={handleInputForm}/>
                            <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                                S
                            </span>
                        </label>

                        <label htmlFor="size_m" className="cursor-pointer p-0.5">
                            <input type="radio" name="size" value="M" id="size_m" className="peer sr-only" readOnly
                                    onChange={handleInputForm}/>
                            <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                                M
                            </span>
                        </label>

                        <label htmlFor="size_l" className="cursor-pointer p-0.5">
                            <input type="radio" name="size" value="L" id="size_l" className="peer sr-only" readOnly
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
                        className="w-12 rounded border-gray-200 py-3 font-bold text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none border border-spacing-1"
                    />
                    <button type='button' className='bg-gray-300 shadow shadow-slate-400 px-4 rounded-full'
                            onClick={() => handleCantidad(1)}
                    >+
                    </button>
                </div>
            </div>

            <div className="mt-12 flex">
                <button type="submit"
                        className={`block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white ${incluido? 'bg-gray-300' : 'hover:bg-green-500'}`}
                        disabled={incluido}
                >
                    {incluido? 'Producto agregado al carrito de compras' : 'Agregar al carrito de compras'}
                </button>
            </div>

        </form>
    )
}
