import React, { useEffect, useState } from 'react';

import { logo, navLinks } from '../constants';

import { BsBell } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdArrowDropDown } from 'react-icons/md';

import Link from 'next/link';

type Props = {}

const NavBar:React.FC = ({}: Props) => {

  const [blackNavBar, setBlackNavBar] = useState(false);
  const [displaySearchBar, setDisplaySearchBar] = useState(false);
  const [navPopup, setNavPopup] = useState(false);
    
  const navColorTransition = () => {
    window.scrollY >= 50 ? setBlackNavBar(true) : setBlackNavBar(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', navColorTransition);
},[]);

  return (
    <nav className={`flex justify-between p-2 fixed backdrop:blur-1  ${blackNavBar ? "bg-black" : "bg-gradient-to-t from-black to-transparent"} w-full z-10`}>
      <div className="flex w-[50%] items-center">
        <img src={logo[0].imgUrl} alt="logo" className='sm:block hidden h-[50px] mr-10' />
        <img src={logo[1].imgUrl} alt="logo" className='sm:hidden block h-[50px] mr-1' />
        <ul className='md:flex gap-4 hidden'>
          {navLinks.map((item, index) => (
            <Link href={item.to} key={index}>
              <li className='text-white transition duration-300 hover:text-red-500 active:text-red-500 cursor-pointer'>{item.link}</li>
            </Link>
          ))}
        </ul>
        <div className="relative">
          <p onClick={() => setNavPopup(!navPopup)} className='text-white flex md:hidden items-center'>Pacourir <MdArrowDropDown/></p>
          {navPopup && (
          <ul className='flex flex-col absolute top-5 bg-black p-3 w-[120px] bg-opacity-80 -left-3'>
            {navLinks.map((item, index) => (
            <Link href={item.to} key={index}>
              <li className='text-white transition duration-300 hover:text-red-500 active:text-red-500 cursor-pointer'>{item.link}</li>
            </Link>
          ))}
          </ul>
        )}
        </div>
      </div>
      <div className="flex w-[50%] items-center gap-4 justify-end">
        {displaySearchBar && (
          <input type="text" className='w-[90px] border border-white bg-black text-white p-1 text-sm' placeholder='Search here' />
        )}
        <AiOutlineSearch size={25} style={{color: "white"}} onClick={() => setDisplaySearchBar(!displaySearchBar)}/>
        <BsBell size={25} style={{color: "white"}} className="sm:block hidden"/>
        <img src="/miniature.png" alt="profil-picture" className='h-[35px] rounded-md sm:block hidden'/>
      </div>
    </nav>
  )
}

export default NavBar