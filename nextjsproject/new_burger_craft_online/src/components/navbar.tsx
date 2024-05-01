'use client'
import Image from 'next/image';
import Link from 'next/link';
import wesitelogo from '@/assets/images/websitelogo.JPG';
import {FiShoppingCart} from 'react-icons/fi';
import {usePathname} from "next/navigation";
import {  Navbar} from 'flowbite-react';
import React from 'react';

export const NavbarComponent:React.FC = () => {
    const pathname = usePathname()
     const myContext=[]
    return (
        <>

            <Navbar fluid rounded className={'text-lg px-2 font-bold border-b-2  sm:mt-4   '}>
                <Navbar.Brand>
                    <Image src={wesitelogo} style={{height: '40px', width: 'auto'}} alt={'image not shows'}/>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Link className={`relative items-center  bg-gray-200 hover:bg-red-300 p-3 mr-2 rounded-full ${pathname === '/cartlist' ? 'bg-red-200' : ''}`} href={'/cartlist'}>
                        <FiShoppingCart size={24}/>{myContext.length > 0 && (<div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs  text-white bg-red-500   rounded-full -top-1 -end-1 ">
                        {myContext.length}
                    </div>)
                    }
                    </Link>
                    <Navbar.Toggle/>
                </div>
                <Navbar.Collapse>
                    <Link className={` md:rounded-md  font-bold text-lg customunderline ${pathname === '/' ? ' customunderlineactive' : ''}`} href={'/'}> Discover</Link>
                    <Link
                        className={`md:rounded-md  font-bold  text-lg customunderline ${pathname === '/makeyourburger' ? ' customunderlineactive  ' : ''}`}
                        href={'/makeyourburger'}>Make your Burger</Link>
                    <Link
                        className={` md:rounded-md font-bold text-lg  customunderline ${pathname === '/contactus' ? ' customunderlineactive' : ''}`}
                        href={'/contactus'}> Contact us</Link>
                </Navbar.Collapse>
            </Navbar>


        </>
    );
};
