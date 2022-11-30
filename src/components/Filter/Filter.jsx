import React from 'react';
import { category } from '../../data/basic';


export const Filter = () => {

    return (
        <form className="border-t border-yellow-500 lg:border-t-0">
            <div>
                <fieldset>
                    <legend className="block w-full bg-yellow-100 px-5 py-3 text-xs font-medium">Categoria</legend>

                    <div className="space-y-2 px-5 py-6">
                        <div className="flex items-center">
                            <input id={category.camisa} type="checkbox" name={category.camisa} className="h-5 w-5 rounded border-gray-300"/>
                            <label for={category.camisa} className="ml-3 text-sm font-medium">Camisas</label>
                        </div>
                        <div className="flex items-center">
                            <input id={category.polo} type="checkbox" name={category.polo} className="h-5 w-5 rounded border-gray-300"/>
                            <label for={category.polo} className="ml-3 text-sm font-medium">Polos</label>
                        </div>
                        <div className="flex items-center">
                            <input id={category.polera} type="checkbox" name={category.polera} className="h-5 w-5 rounded border-gray-300"/>
                            <label for={category.polera} className="ml-3 text-sm font-medium">Poleras</label>
                        </div>
                        <div className="flex items-center">
                            <input id={category.pantalon} type="checkbox" name={category.pantalon} className="h-5 w-5 rounded border-gray-300"/>
                            <label for={category.pantalon} className="ml-3 text-sm font-medium">Pantalones</label>
                        </div>
                        <div className="flex items-center">
                            <input id={category.short} type="checkbox" name={category.short} className="h-5 w-5 rounded border-gray-300"/>
                            <label for={category.short} className="ml-3 text-sm font-medium">Shorts</label>
                        </div>
                        <div className="flex items-center">
                            <input id={category.zapatos} type="checkbox" name={category.zapatos} className="h-5 w-5 rounded border-gray-300"/>
                            <label for={category.zapatos} className="ml-3 text-sm font-medium">Zapatillas</label>
                        </div>
                    </div>
                </fieldset>
            </div>

            <div className="flex justify-between border-t border-yellow-100 px-5 py-3">
                <button name="reset" type="button" className="rounded text-xs font-medium text-gray-600 underline">
                    Reset All
                </button>

                <button name="commit" type="button" className="rounded bg-green-600 px-5 py-3 text-xs font-medium text-white">
                    Aplicar filtros
                </button>
            </div>
        </form>
    )
}
