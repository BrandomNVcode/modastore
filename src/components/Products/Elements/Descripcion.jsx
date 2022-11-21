import React from 'react';


export const Descripcion = () => {
    return (
        <details className="group relative mt-4">
            <summary className="block">
                <div>
                    <div className="prose max-w-none group-open:hidden">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                            veniam dicta beatae eos ex error culpa delectus rem tenetur,
                            architecto quam nesciunt, dolor veritatis nisi minus
                            inventore, rerum at recusandae?
                        </p>
                    </div>

                    <span className="mt-4 cursor-pointer text-sm font-medium underline group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                        Read More
                    </span>
                </div>
            </summary>

            <div className="prose max-w-none pb-6">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                    veniam dicta beatae eos ex error culpa delectus rem tenetur,
                    architecto quam nesciunt, dolor veritatis nisi minus inventore,
                    rerum at recusandae?
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                    nam sapiente nobis ea veritatis error consequatur nisi
                    exercitationem iure laudantium culpa, animi temporibus non! Maxime
                    et quisquam amet. A, deserunt!
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                    nam sapiente nobis ea veritatis error consequatur nisi
                    exercitationem iure laudantium culpa, animi temporibus non! Maxime
                    et quisquam amet. A, deserunt!
                </p>
            </div>
        </details>
    )
}
