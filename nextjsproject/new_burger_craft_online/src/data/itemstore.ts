
import visa from "@/assets/images/visa.svg";
import image2 from "@/assets/images/twobank.svg";
import gpay from "@/assets/images/gpay.svg";
import pay from "@/assets/images/pay.svg";
import p from "@/assets/images/p.svg";
import bitcon from "@/assets/images/bitcone.svg";
import Etherium from "@/assets/images/Etherium.svg";
import cutlet from "@/assets/images/cutlet.png";
import Mayo from "@/assets/images/Mayo.png";
import onion from "@/assets/images/onine.png";
import tomato from "@/assets/images/tomato.png";
import cucumbar from "@/assets/images/cucumber.png";
import cheese from "@/assets/images/cheese.png";
import salad from "@/assets/images/salad.png";
import ban from "@/assets/images/ban.png";
import bun_bottom from "@/assets/images/bun_bottom.png";
import eggimage from "@/assets/images/eggimage.png"
import pepsi from "@/assets/images/pepsi.png"
import spriteImag from "@/assets/images/sprite.png"
import ketchap from "@/assets/images/catchap.png"
import {Ingredient} from "@/utilis/defineTypes";
export const paymentOptions: string[] = [
    visa,
    image2,
    gpay,
    pay,
    p,
    bitcon,
    Etherium
];
export const burgerBottom: Ingredient = {
    id: 0,
    imgSrc: bun_bottom,
    productName: 'Bun bottom',
    price: 2.5,
    weight: 1,
    calories: 30,
    time: 0.1,
}
export const allIngredients: Ingredient[] = [
    {
        id: 1,
        imgSrc: cutlet,
        productName: 'Cutlet',
        price: 2.5,
        weight: 1,
        calories: 30,
        time: 0.1,
    },
    {
        id: 2,
        imgSrc: Mayo,
        productName: 'Mayo',
        price: 1.5,
        weight: 0.5,
        calories: 50,
        time: 0.2,
    },
    {
        id: 3,
        imgSrc: onion,
        productName: 'Onion',
        price: 0.75,
        weight: 0.5,
        calories: 10,
        time: 0.5,
    },
    {
        id: 4,
        imgSrc: tomato,
        productName: 'Tomato',
        price: 1.0,
        weight: 0.5,
        calories: 15,
        time: 1,
    },
    {
        id: 5,
        imgSrc: cucumbar,
        productName: 'Cucumber',
        price: 0.5,
        weight: 0.5,
        calories: 7.5,
        time: 0.5,
    },
    {
        id: 6,
        imgSrc: cheese,
        productName: 'Cheese',
        price: 2.0,
        weight: 0.5,
        calories: 100,
        time: 0.1,
    },
    {
        id: 7,
        imgSrc: salad,
        productName: 'Salad',
        price: 1.75,
        weight: 0.5,
        calories: 20,
        time: 1,
    }, {
        id: 8,
        imgSrc: eggimage,
        productName: 'Egg',
        price: 1.0,
        weight: 0.5,
        calories: 60,
        time: 0.5,
    },
    {
        id: 9,
        imgSrc: ban,
        productName: 'Ban',
        price: 0.9,
        weight: 0.5,
        calories: 45,
        time: 0.5,
    }, {
        id: 10,
        imgSrc: ketchap,
        productName: 'Ketchup',
        price: 2.5,
        weight: 0.5,
        calories: 75,
        time: 0.3,
    },

    {
        id: 11,
        imgSrc: pepsi,
        productName: ' Pepsi',
        price: 0.5,
        weight: 0.3,
        calories: 15,
        time: 0.1,
    },
    {
        id: 12,
        imgSrc: spriteImag,
        productName: 'Sprite',
        price: 0.5,
        weight: 0.3,
        calories: 10,
        time: 0.1,
    },
];

