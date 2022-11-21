import React, { useEffect } from 'react';
import { Filter } from '../Filter/Filter';
import { ProductCard } from './ProductCard';


export const ProductCollection = () => {



    useEffect(() => {
        window.addEventListener('resize', () => {
            const desktopScreen = window.innerWidth < 768
        
            document.querySelector('details').open = !desktopScreen
        })
    }, []);
    



    return (
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">

                <div className="lg:sticky lg:top-4">
                    <details open className="overflow-hidden rounded border border-gray-200">

                        <summary className="flex items-center justify-between bg-gray-100 px-5 py-3 lg:hidden">
                            <span className="text-sm font-medium"> Toggle Filters </span>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </summary>

                        <Filter />
                    </details>
                </div>

                <div className="lg:col-span-3">
                    
                    <div className="flex items-center justify-between">
                        <p className="text-base text-gray-500">
                            6 de 25 resultados
                        </p>

                        <div className="ml-4">
                            <label for="SortBy" className="sr-only"> Sort </label>

                            <select id="SortBy" name="sort_by" className="rounded border-gray-100 text-sm">
                                <option readonly>Ordenar</option>
                                <option value="title-asc">Título, A-Z</option>
                                <option value="title-desc">Título, Z-A</option>
                                <option value="price-asc">Precio, Low-High</option>
                                <option value="price-desc">Precio, High-Low</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
                        <div className='m-2 mb-8'>
                            <ProductCard />
                        </div>
                        <div className='m-2 mb-8'>
                            <ProductCard />
                        </div>
                        <div className='m-2 mb-8'>
                            <ProductCard />
                        </div>
                        <div className='m-2 mb-8'>
                            <ProductCard />
                        </div>
                        <div className='m-2 mb-8'>
                            <ProductCard />
                        </div>
                        <div className='m-2 mb-8'>
                            <ProductCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
