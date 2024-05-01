//
// 'use client'
// import { useContext, useEffect, useState } from "react";
// import { MyContext } from "@/app/layout";
// import { FaTrash } from "react-icons/fa";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import img from '@/components/assets/images/ban.png';
// import ModalComponent from "@/components/modal";
// import {ShowSuccess} from "@/components/ShowSuccess";
// import {EmptyCartComponent} from "@/components/EmptyCart"; // Add the missing import
//
// const CartList = () => {
//     useEffect(() => {
//         AOS.init({ duration: 1000 });
//     }, []);
//
//     const { carts, removeFromCart, updateQuantity } = useContext(MyContext);
//     const totalPrice = (
//         carts.reduce((total, product) => total + product.burger.price * product.quantity, 0)
//     ).toFixed(2);
//     const [showModal, setShowModal] = useState(false);
//     const [showSuccess, setShowSuccess] = useState(false);
//
//     const openModal = () => {
//         setShowModal(true);
//     };
//
//     const closeModal = () => {
//         setShowModal(false);
//     };
//
//     const buyNow = () => {
//         setShowModal(false);
//         setShowSuccess(true);
//         setTimeout(() => {
//             setShowSuccess(false);
//         }, 2000);
//     };
//     return (
//         <>
//             <div className="w-full max-w-2xl mx-auto  ">
//                 {carts.length === 0 ? (
//                     <EmptyCartComponent />
//                 ) : (
//                     <>
//                         <p className="text-2xl font-semibold text-gray-800 mb-4 mt-6 block">Your Shopping Cart</p>
//                         <table className="w-full border-collapse">
//                             <thead>
//                             <tr className="border-b">
//                                 <th className="text-left py-2">Product</th>
//                                 <th className="text-center py-2">Price($)</th>
//                                 <th className="text-center py-2">Quantity</th>
//                                 <th className="text-center py-2">Total($)</th>
//                             </tr>
//                             </thead>
//                             <tbody>
//                             {carts.map((item, index) => (
//                                 <tr key={index} className="border-b">
//                                     <td className="cart-item__media">
//                                         <div className="cart-item__image-container gradient global-media-settings">
//                                             <img src={item.burger.base64Image}
//                                                  className="cart-item__image w-12 h-12 md:w-12 md:h-16 my-2"
//                                                  alt={item.burger.base64Image} loading="lazy" />
//                                         </div>
//                                     </td>
//                                     <td className="text-center py-2">{item.burger.price}</td>
//                                     <td className="text-center py-2">
//                                         <button onClick={() => updateQuantity(item, item.quantity - 1)}
//                                                 className="px-2 py-1 mr-2 bg-gray-300 rounded">-
//                                         </button>
//                                         {item.quantity}
//                                         <button onClick={() => updateQuantity(item, item.quantity + 1)}
//                                                 className="px-2 py-1 ml-2 bg-blue-300 rounded">+
//                                         </button>
//                                     </td>
//                                     <td className="text-center py-2">{(item.burger.price * item.quantity).toFixed(2)}</td>
//                                     <td className="cart-item__delete text-center py-2">
//                                         <button onClick={() => removeFromCart(item)}
//                                                 className="text-red-500 hover:text-red-700 sm:px-2">
//                                             <FaTrash />
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                             </tbody>
//                         </table>
//                         <h2 className="text-2xl font-semibold my-2 text-center bg-blue-300">Total price:${totalPrice}</h2>
//                         <div className='text-center'>
//                             <button
//                                 className="bg-blue-500 text-white mb-6 py-2 my-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
//                                 onClick={openModal}>
//                                 Buy the product
//                             </button>
//                         </div>
//                         {showModal &&  <ModalComponent onClose={closeModal} onBuyNow={buyNow} shows={showModal} />}
//                         {showSuccess && <ShowSuccess />}
//
//                     </>
//                 )}
//             </div>
//         </>
//     );
// };
//
// export default CartList;
