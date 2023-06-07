import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='navbar bg-emerald-100 h-16 flex items-center justify-between px-20'>
            <h1>
                <Link href='/'><h1 className='font-bold text-3xl  text-emerald-700'>Giorgio</h1></Link>
            </h1>
            <div>
                <ul className='flex'>
                    <li className='mx-6 underline underline-offset-2'>
                        <Link href='/about'>About</Link>
                    </li>
                    <li className='mx-6 underline underline-offset-2'>
                        <Link href='/form'>Candidati</Link>
                    </li>
                    <li className='mx-6 underline underline-offset-2'>
                        <Link href='/blog'>Segreti di stato</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
