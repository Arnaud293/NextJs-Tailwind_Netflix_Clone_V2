import React from 'react';

import { logo, navLinks } from '../constants';

import { BsBell } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdArrowDropDown } from 'react-icons/md';

type Props = {}

const NavBar:React.FC = ({}: Props) => {
  return (
    <nav className='flex justify-between p-2 fixed bg-black w-full z-10'>
      <div className="flex w-[50%] items-center">
        <img src={logo[0].imgUrl} alt="logo" className='h-[50px] mr-10' />
        <ul className='md:flex gap-4 hidden'>
          {navLinks.map((item) => (
            <li key={item.id} className='text-white transition duration-300 hover:text-red-500 cursor-pointer'>{item.link}</li>
          ))}
        </ul>
        <p className='text-white flex md:hidden items-center'>Pacourir <MdArrowDropDown/></p>
      </div>
      <div className="flex w-[50%] items-center gap-4 justify-end">
        <AiOutlineSearch size={25} style={{color: "white"}}/>
        <BsBell size={25} style={{color: "white"}}/>
        <img src="/miniature.png" alt="profil-picture" className='h-[35px] rounded-md'/>
      </div>
    </nav>
  )
}

export default NavBar