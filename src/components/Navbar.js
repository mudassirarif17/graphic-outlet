import React, { useRef, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import '../css/navbar.css'
import { Link } from 'react-router-dom'
import logo from '../img/result.png'

const Navbar = () => {
    const ref = useRef();
    const cartToggle = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
        else if (ref.current.classList.contains('translate-x-0')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }
    return (
        <div className=''>
            <navbar className="flex flex-col items-center md:flex-row md:justify-start shadow-md">
                <div className='logo m-4 z-20'>
                    <Link to="/"><img src={ logo } width={ 80 } height={ 30 } alt="logo" /></Link>
                </div>
                <nav className='flex justify-between mbl-display'>
                    <ul className='flex space-x-5 font-bold m-4'>
                        <li><Link to="/" className='hover:text-blue-500 cursor-pointer'>Home</Link></li>
                        <li><Link to="/portfolio" className='hover:text-blue-500 cursor-pointer'>Portfolio</Link></li>
                        <li><Link to="/contact" className='hover:text-blue-500 cursor-pointer'>ContactUs</Link></li>
                        <li><Link to="/about" className='hover:text-blue-500 cursor-pointer'>AboutUs</Link></li>
                        <li><Link to="/comission" className='hover:text-blue-500 cursor-pointer'>Commission</Link></li>
                    </ul>
                </nav>
                <div onClick={ cartToggle } className='hambburger absolute right-6 top-7 px-4 py-2 bg-white shadow-md text-sm font-semibold'>
                    <ul>
                        <GiHamburgerMenu />
                    </ul>
                </div>
            </navbar>

            {/* mobile nav overflow-y-scroll*/ }
            <div ref={ ref } className="cartbar overflow-y-scroll  absolute top-0 right-0 bg-white  w-60  transform transition-transform translate-x-full">
                <div onClick={ cartToggle } className='absolute right-6 top-5 px-4 py-2 bg-white shadow-md text-sm font-semibold'>
                    <ul><GrClose /></ul>
                </div>
                <div>
                    <nav className='flex flex-col my-11'>
                        <ul className='flex space-y-5 flex-col items-center font-bold m-4'>
                            <li><Link to="/" className='hover:text-blue-500 cursor-pointer'>Home</Link></li>
                            <li><Link to="/portfolio" className='hover:text-blue-500 cursor-pointer'>Portfolio</Link></li>
                            <li><Link to="/contact" className='hover:text-blue-500 cursor-pointer'>Contact</Link></li>
                            <li><Link to="/about" className='hover:text-blue-500 cursor-pointer'>About</Link></li>
                            <li><Link to="/comission" className='hover:text-blue-500 cursor-pointer'>Commission</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

    )
}

export default Navbar
