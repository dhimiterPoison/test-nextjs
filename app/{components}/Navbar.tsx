import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import UserIcon from '../../public/user_icon.png';

const Navbar = () => {
    return (
        // <nav className='navbar fixed top-0 bg-emerald-100 h-16 flex items-center justify-between px-20'>
        //     <h1>
        //         <Link href='/'><h1 className='font-bold text-3xl  text-emerald-700'>Giorgio</h1></Link>
        //     </h1>
        //     <div>
        //         <ul className='flex'>
        //             <li className='mx-6 underline underline-offset-2'>
        //                 <Link href='/about'>About</Link>
        //             </li>
        //             <li className='mx-6 underline underline-offset-2'>
        //                 <Link href='/form'>Candidati</Link>
        //             </li>
        //             <li className='mx-6 underline underline-offset-2'>
        //                 <Link href='/blog'>Segreti di stato</Link>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
        <div className='navbar fixed top-0 bg-emerald-100 md:px-20'>
            <div className='flex-1'>
                <a className='btn btn-ghost font-bold text-3xl capitalize text-emerald-700'>
                    GiorgioUI
                </a>
            </div>
            <div className='flex-none'>
                <ul className='menu menu-horizontal px-1 items-center'>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    <li>
                        <Link href='/form'>Candidati</Link>
                    </li>
                    <li>
                        <details>
                            <summary>Segreti di stato</summary>
                            <ul className='p-2'>
                                <li>
                                    <Link href='/blog'>Blog</Link>
                                </li>
                                <li>
                                    <a>Ecommerce</a>
                                </li>
                                <li>
                                    <a>Ufo</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li className=''>
                       <div className='user-section-navbar ml-4'>
                       <Image
                            src={UserIcon}
                            alt={'user icon'}
                            className='w-8 h-8 rounded-full'
                        />
                        <h4 className=''>Account</h4>
                       </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
