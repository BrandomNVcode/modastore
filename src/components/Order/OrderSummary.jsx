import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../Modal/Modal";
//import { products } from "../../data/dataset";
import { Payment } from "../Payment/Payment";
//import { products } from "../../data/products";
import { ItemOrder } from "./Elements/ItemOrder";


/*const changeOrders = (orders) => {
    const list = [];
    let price = 0;

    orders.forEach(order => {
        list.push(products.find(product => product.id === order.id));
        price += (order.cant)*(products.find(prod => prod.id === order.id).price)
    })

    return list;
}*/


export const OrderSummary = () => {



    const { orders } = useSelector(state => state.order);

    const [listOrder, setListOrder] = useState([...orders]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {

        setListOrder([...orders]);

        let price = 0;

        orders.forEach(order => price += (order.cant)*(order.price))

        setTotalPrice(price);

    }, [orders])
    


    return (
        <div className="2xl:container 2xl:mx-auto py-14 px-4 md:px-12 xl:px-64">
            <div className="flex justify-center flex-col items-start w-full">
                <h3 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 w-full  md:text-left text-gray-800">Resumen de Orden</h3>
                <div className="flex justify-center items-center w-full mt-8  flex-col space-y-4 ">
                    {
                        listOrder.length === orders.length && 
                        listOrder.map(product => (
                            <ItemOrder key={product.id}
                                id={product.id}
                                img={product.img}
                                price={product.price}
                                title={product.name}
                                talla={product.talla}
                                cantidad={product.cant}
                            />
                        ))
                    }
                </div>
                <div className="flex flex-col justify-start items-start mt-8 xl:mt-10 space-y-10 w-full">
                    <div className="flex flex-col space-y-4 w-full">
                        <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                            <div className="flex justify-between  w-full">
                                <p className="text-base leading-4 text-gray-800">Subtotal</p>
                                <p className="text-base leading-4 text-gray-600">${totalPrice.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between  w-full">
                                <p className="text-base leading-4 text-gray-800">Descuento</p>
                                <p className="text-base leading-4 text-gray-600">(0%) $0.00</p>
                            </div>
                            <div className="flex justify-between  w-full">
                                <p className="text-base leading-4 text-gray-800">Envio</p>
                                <p className="text-base leading-4 text-gray-600">$10.00</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                            <p className="text-base font-semibold leading-4 text-gray-600">${totalPrice <= 0 ? 0 : (totalPrice + 10).toFixed(2)}</p>
                        </div>
                        <div className="flex w-full justify-center items-center pt-1 md:pt-4  xl:pt-8 space-y-6 md:space-y-8 flex-col">
                            <button
                                className={`py-5 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-800  w-full text-base font-medium leading-4 text-white ${totalPrice <= 0? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-800 hover:bg-black'}`}
                                disabled={(totalPrice <= 0)}
                                onClick={() => setVisible(true)}
                                >
                                Pagar ahora
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal visible={visible} setIsVisible={setVisible}>
                <Payment price={totalPrice}/>
            </Modal>
            
        </div>
    );
};


