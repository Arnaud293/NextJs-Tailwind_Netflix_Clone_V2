import React from 'react';
import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';

import { FooterLinks } from '../constants';


type Props = {}

const Footer:React.FC = ({}: Props) => {
  return (
    <div className='h-fit w-full bg-gray-900 text-white flex flex-col items-center py-3'>
      <div className="flex w-[70%] py-3 gap-5">
        <FaFacebookF size={30} />
        <FaInstagram size={30} />
        <FaTwitter size={30} />
        <FaYoutube size={30} />
      </div>
      <div className="w-[70%] text-gray-500 grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 gap-4">
        <ul className='flex flex-col gap-3'>
          {FooterLinks[0].map((link) => (
            <li className='cursor-pointer hover:underline'>{link.title}</li>
          ))}
        </ul>
        <ul className='flex flex-col gap-3'>
        {FooterLinks[1].map((link) => (
            <li className='cursor-pointer hover:underline'>{link.title}</li>
          ))}
        </ul>
        <ul className='flex flex-col gap-3'>
        {FooterLinks[2].map((link) => (
            <li className='cursor-pointer hover:underline'>{link.title}</li>
          ))}
        </ul>
        <ul className='flex flex-col gap-3'>
        {FooterLinks[3].map((link) => (
            <li className='cursor-pointer hover:underline'>{link.title}</li>
          ))}
        </ul>
      </div>
      <div className="w-[70%] text-gray-400 p-2 py-4">
        <p className='border w-fit p-3'>Service Code</p>
      </div>
    </div>
  )
}

export default Footer