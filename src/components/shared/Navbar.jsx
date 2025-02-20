import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoSearch } from "react-icons/io5";
import { RiShoppingBagLine } from "react-icons/ri";

const Navbar = () => {
    const navItems = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Blog",
            path: "/blog"
        },
        {
            title: "Contact",
            path: "/contact"
        },
    ]
    return (

        <div className=" bg-gray-200">
          <div className='navbar container mx-auto'>
          <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow m-3">
             {
              navItems.map((item)=>(
                <Link className='font-bold m-3 hover:text-primary'href={item.path} key={item.path}>{item.title}</Link>
              ))
             }
            </ul>
          </div>
         <Link href="/"> <Image src="logo.svg" height={50} width={50} alt='logoPic'></Image></Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 m-3">
          {
              navItems.map((item)=>(
                <Link className='font-bold m-3 hover:text-primary' href={item.path} key={item.path}>{item.title}</Link>
              ))
             }
          </ul>
        </div>
        <div className="navbar-end">
          <div className=' px-2 '>
         <div className='flex justify-around mx-3' >
          <RiShoppingBagLine className='text-2xl' />
          <IoSearch className='text-2xl' /> 
         </div>
          </div>
          <a className="btn btn-outline btn-primary">Appointment</a>
        </div>
          </div>
      </div>
    );
};

export default Navbar;