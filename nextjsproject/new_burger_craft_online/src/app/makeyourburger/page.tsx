'use client'
import React, {useState} from "react";
import Image from 'next/image'
import ItemCart from "@/components/itemcard";
import BurgerSummary from "@/components/BurgerSummary";
import {Ingredient} from "@/utilis/defineTypes";
import {allIngredients, burgerBottom} from "@/data/itemstore";


const MakeBurger = () => {
    const [burgerIngredient, setBurgerIngredient] = useState<Ingredient[]>([burgerBottom]);
    const handleDecrement = (ingredient: Ingredient) => {
        const findIndex = burgerIngredient.lastIndexOf(ingredient);
        if (findIndex !== -1) {
            setBurgerIngredient((item) => [...item.slice(0, findIndex), ...item.slice(findIndex + 1)])
        }

    }
    const handleIncrement = (ingredient: Ingredient) => {
        setBurgerIngredient((item) => [...item, ingredient])
    }


    const calculateTotal = (property) => {
        return burgerIngredient.reduce((sum, ingr) => sum + ingr[property], 0)

    }
    return (
        <div>

            <h1 className="text-2xl font-bold sm:text-2xl md:text-3xl py-4  ">Make Your Burger</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 px-2    ">

                <div className={'flex items-center justify-end flex-col border rounded-lg shadow-lg py-4  px-4    '}>

                    <div id="captureDiv"    className={''} style={{width: '100%', maxWidth: '450px',borderBottom:'2px solid gray'}}>
                        <div className={'flex flex-col  items-center'}  >
                            {burgerIngredient.slice().reverse().map((item: Ingredient, index: number) => (
                                (item.id !== 10 && item.id !== 11 && item.id !== 12) && (
                                    <div key={index} className={'  border '}>
                                        <Image src={item.imgSrc} alt={item.productName}
                                               width={(item.id === 9 || item.id === 0) ? 350 : 220}/>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                        <div className={'flex flex-wrap gap-2 my-4 border-top'}>
                            {burgerIngredient.slice().reverse().map((item: Ingredient, index: number) => (
                                <div key={index} className={'flex '}>
                                    {(item.id === 10 || item.id === 11|| item.id === 12) && (
                                        <Image src={item.imgSrc} alt={item.productName} width={20} height={10}/>
                                    )}


                                </div>
                            ))}</div>
                    </div>


                <BurgerSummary
                    totalPrice={calculateTotal('price').toFixed(2)}
                    totalTime={calculateTotal('time').toFixed(2)}
                    totalWeight={calculateTotal('weight').toFixed(2)}
                    totalCalories={calculateTotal('calories').toFixed(1)}
                />
            </div>

            <div className="mb-4 ">
                <div
                    className=" flex flex-wrap  justify-evenly   gap-6  px-2 py-8     ">


                       {allIngredients.map((item: Ingredient) =>
                           <ItemCart completeItem={item} key={item.id}
                                     quantity={burgerIngredient.filter(itm => item.id === itm.id).length}
                                     handleDecrement={handleDecrement} handleIncrement={handleIncrement}/>)}

                </div>

            </div>
        </div>
    );
};

export default MakeBurger;
