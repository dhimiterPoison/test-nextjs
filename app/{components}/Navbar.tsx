import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='navbar bg-teal-100 h-16 flex items-center justify-between px-20'>
        <h1><Link href="/">Giorgio</Link></h1>
        <div>
            <ul className='flex'>
                <li className='mr-6'><Link href="/about">About</Link></li>
                <li className='mr-6'><Link href="/contact">Contact</Link></li>
                <li className='mr-6'><Link href="/blog">Segreti di stato</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar