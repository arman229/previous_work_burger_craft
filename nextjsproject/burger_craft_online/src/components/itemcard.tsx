"use client"
import React from "react";
import Image from "next/image";
// interface ItemCartprops {
//     ingredient:,
//     handleDec:,
//     handleIncr:,
//     quantity:,
// }
const ItemCart  = ({ingredient, handleDec, handleIncr, quantity}) => {
    return (
        <div key={ingredient.id} >
            <div className=" py-6 bg-gray-200 rounded-lg shadow-md text-center"
                 style={{width: '140px', height: '183px'}}>
                <Image src={ingredient.imgSrc} alt="Product Image" className="object-cover mb-2 mx-auto rounded-md" height={60}/>
                <h3 className="text-lg font-semibold mb-4">{ingredient.productName}</h3>
                <div className="flex items-center justify-center space-x-4">
                    <button onClick={() => handleDec(ingredient)}
                            className="  hover:bg-gray-400 text-4xl pb-2 bg-gray-300 rounded-full w-9 h-9 flex items-center justify-center">-
                    </button>
                    <span className="font-semibold"> {quantity}</span>
                    <button onClick={() => handleIncr(ingredient)}
                            className=" hover:bg-gray-400 text-2xl pb-1 bg-gray-300 rounded-full w-9 h-9 flex items-center justify-center">+
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ItemCart;
