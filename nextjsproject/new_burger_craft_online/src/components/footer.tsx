import {paymentOptions} from "@/data/itemstore";
import Link from "next/link";
import Image from "next/image";
import React from 'react';
export const FooterComponent:React.FC = () => {
    return (
        <>
            <footer className="px-2 py-4 border-t mt-4">
                <div className="flex justify-between items-center flex-wrap gap-4">
                    <div className="text-sm flex space-x-2">
                        <div className={'flex-shrink-0'}>© 2023 Arman. </div>

                        <Link href="/privicypolicy" className={'flex-shrink-0 border-l-2 border-gray-900 px-2 hover:underline'}>Privacy Policy</Link>
                        <Link href="/termsandcondition" className={'flex-shrink-0 border-l-2 border-gray-900 px-2 hover:underline'}>Terms &
                            Conditions</Link>
                    </div>
                    <div className=" text-sm flex space-x-2">
                        {paymentOptions.map((image, index) => (
                            <div key={index}>
                                <Link href="/">
                                    <Image src={image} alt={`Image ${index}`} width={35}/>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </footer>
        </>
    );
};
