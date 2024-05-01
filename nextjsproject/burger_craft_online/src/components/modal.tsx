'use client';
import {Button, Modal} from 'flowbite-react';
import {useState} from "react";
const ModalComponent=({onClose, onBuyNow, shows})=> {
    const [submitButtonClicked, setSubmitButtonClicked] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
    });
    const [errorHandle, setErrorHandle] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
        cardNumber: '',
        expirationDate: '',
        cvv: ''
    })


    const handleClose = () => {
        onClose();
    };

    const handleBuyNow = () => {
        setSubmitButtonClicked(true);
        const isValid =
            formData.name.trim() !== '' &&
            formData.address.trim() !== '' &&
            formData.email.trim() !== '' &&
            formData.phone.trim() !== '' &&
            formData.cardNumber.trim() !== '' &&
            formData.expirationDate.trim() !== '' &&
            formData.cvv.trim() !== '';

        if (isValid) {
            onBuyNow();
            setSubmitButtonClicked(false);
            setErrorHandle({
                name: '',
                address: '',
                email: '',
                phone: '',
                cardNumber: '',
                expirationDate: '',
                cvv: '',
            });
            setFormData({
                name: '',
                address: '',
                email: '',
                phone: '',
                cardNumber: '',
                expirationDate: '',
                cvv: '',
            });
        }
    };


    const handleInputChange = (e: any) => {
        const {name, value} = e.target;

        setFormData((prev) => ({...prev, [name]: value}));

    };

    return (
        <>
            <Modal show={shows} onClose={handleClose} className={'bg-gray-800'}>
                <Modal.Header className="text-2xl font-semibold  ">Checkout</Modal.Header>
                <Modal.Body>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">Name</label>
                        <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" value={formData.name} onChange={handleInputChange}/>
                        {submitButtonClicked && formData.name.trim() === '' && (
                            <p className="mt-2 text-sm text-red-600 "> Please fill it in before submitting.</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-600 text-sm font-medium mb-2">Address</label>
                        <textarea id="address" name="address" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" rows="3" value={formData.address} onChange={handleInputChange}></textarea>
                        {submitButtonClicked && formData.address.trim() === '' && (
                            <p className="mt-2 text-sm text-red-600 "> Please fill it in before submitting.</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">Email Address</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required value={formData.email} onChange={handleInputChange}/>
                        {submitButtonClicked && formData.email.trim() === '' && (
                            <p className="mt-2 text-sm text-red-600 ">Please fill it in before submitting.</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-600 text-sm font-medium mb-2">Phone Number</label>
                        <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required value={formData.phone} onChange={handleInputChange}/>
                        {submitButtonClicked && formData.phone.trim() == '' && (
                            <p className="mt-2 text-sm text-red-600 ">Please fill it in before submitting.</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cardNumber" className="block text-gray-600 text-sm font-medium mb-2">Credit Card Number</label>
                        <input type="text" id="cardNumber" name="cardNumber" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required value={formData.cardNumber} onChange={handleInputChange}/>
                        {submitButtonClicked && formData.cardNumber.trim() === '' && (
                            <p className="mt-2 text-sm text-red-600 ">Please fill it in before submitting.</p>
                        )}
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="expirationDate" className="block text-gray-600 text-sm font-medium mb-2">Expiration Date</label>
                            <input type="text" id="expirationDate" name="expirationDate" placeholder="MM/YY" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required value={formData.expirationDate} onChange={handleInputChange}/>
                            {submitButtonClicked && formData.expirationDate.trim() === '' && (
                                <p className="mt-2 text-sm text-red-600 ">Please fill it in before submitting.</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="cvv" className="block text-gray-600 text-sm font-medium mb-2">CVV</label>
                            <input type="text" id="cvv" name="cvv" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required value={formData.cvv} onChange={handleInputChange}/>
                            {submitButtonClicked && formData.cvv.trim() === '' && (
                                <p className="mt-2 text-sm text-red-600 ">Please fill it in before submitting.</p>
                            )}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button color="gray" onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleBuyNow}>Buy Now</Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default ModalComponent;
