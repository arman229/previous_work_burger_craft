
import React, {useState} from "react";
import Image from "next/image";
import {Ingredient} from "@/utilis/defineTypes";
interface itemCartProps {
    completeItem:Ingredient,
    handleDecrement:(item:Ingredient)=>void,
    handleIncrement:(item:Ingredient)=>void,
    quantity:number,
}

const ItemCart:React.FC<itemCartProps>  = ({completeItem,handleDecrement,handleIncrement,quantity}) => {


    return (
        <div className={'flex justify-center '}>
            <div className=" py-6 bg-gray-200 rounded-lg shadow-md text-center  "
                 style={{width: '140px', height: '183px'}}>
                <Image src={completeItem.imgSrc} alt="Product Image" className="object-cover mb-2 mx-auto rounded-md" height={60}/>
                <h3 className="text-lg font-semibold mb-4">{completeItem.productName} </h3>
                <div className="flex items-center justify-center space-x-4">
                    <button onClick={()=>handleDecrement(completeItem)}
                            className="  hover:bg-gray-400 text-4xl pb-2 bg-gray-300 rounded-full w-9 h-9 flex items-center justify-center">-
                    </button>
                    <span className="font-semibold">{quantity}</span>
                    <button onClick={()=>handleIncrement(completeItem)}
                            className=" hover:bg-gray-400 text-2xl pb-1 bg-gray-300 rounded-full w-9 h-9 flex items-center justify-center">+
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ItemCart;
