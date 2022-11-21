import React from 'react';


export const Filter = () => {
    return (
        <form className="border-t border-yellow-500 lg:border-t-0">
            <fieldset>
                <legend className="block w-full bg-yellow-100 px-5 py-3 text-xs font-medium">Type</legend>

                <div className="space-y-2 px-5 py-6">
                    <div className="flex items-center">
                        <input id="toy" type="checkbox" name="type[toy]" className="h-5 w-5 rounded border-gray-300"/>
                        <label for="toy" className="ml-3 text-sm font-medium">Toy</label>
                    </div>

                    <div className="flex items-center">
                        <input id="game" type="checkbox" name="type[game]" className="h-5 w-5 rounded border-gray-300"/>
                        <label for="game" className="ml-3 text-sm font-medium">Game</label>
                    </div>
                </div>
            </fieldset>

            <div>
                <fieldset>
                    <legend className="block w-full bg-yellow-100 px-5 py-3 text-xs font-medium">Age</legend>

                    <div className="space-y-2 px-5 py-6">
                        <div className="flex items-center">
                            <input id="3+" type="checkbox" name="age[3+]" className="h-5 w-5 rounded border-gray-300"/>
                            <label for="3+" className="ml-3 text-sm font-medium">3+</label>
                        </div>
                    </div>
                </fieldset>
            </div>

            <div className="flex justify-between border-t border-yellow-100 px-5 py-3">
                <button name="reset" type="button" className="rounded text-xs font-medium text-gray-600 underline">
                    Reset All
                </button>

                <button name="commit" type="button" className="rounded bg-green-600 px-5 py-3 text-xs font-medium text-white">
                    Apply Filters
                </button>
            </div>
        </form>
    )
}
