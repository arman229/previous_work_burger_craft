import {Burger} from "@/data/Burger";

export type MyContextType = {
    carts: CartItem[],
    addToCart: (item: CartItem) => void,
    removeFromCart: (item: CartItem) => void,
    updateQuantity: (item: CartItem, newQuantity: number) => void,
}
export type CartItem = {
    burger: Burger,
    quantity: number
}
export type Ingredient = {
    id: number
    imgSrc: any
    productName: string
    price: number
    weight: number
    calories: number
    time: number
}
export type Burger = {
    id: number,
    base64Image: string,
    price: number,
}