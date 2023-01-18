import React from 'react';
import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';

import { FooterLinks } from '../constants';


type Props = {}

const Footer:React.FC = ({}: Props) => {
  return (
    <div className='h-fit w-full bg-gray-900 text-white flex flex-col items-center'>
      <div className="flex w-[70%]">
        <FaFacebookF size={30} />
        <FaInstagram size={30} />
        <FaTwitter size={30} />
        <FaYoutube size={30} />
      </div>
      <div className="w-[70%] text-gray-400 grid grid-cols-4 p-2">
        <ul className='flex flex-col'>
          {FooterLinks[0].map((link) => (
            <li>{link.title}</li>
          ))}
        </ul>
        <ul className='flex flex-col'>
        {FooterLinks[1].map((link) => (
            <li>{link.title}</li>
          ))}
        </ul>
        <ul className='flex flex-col'>
        {FooterLinks[2].map((link) => (
            <li>{link.title}</li>
          ))}
        </ul>
        <ul className='flex flex-col'>
        {FooterLinks[3].map((link) => (
            <li>{link.title}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer