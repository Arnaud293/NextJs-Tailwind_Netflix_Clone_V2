import React from 'react';
import 'tailwindcss/tailwind.css';
import { NavBar } from './';

type ChildrenProps = {
    children?: React.ReactNode
}

const Layout:React.FC<ChildrenProps> = ({children}) => {
  return (
    <>
        <NavBar />
        {children}
    </>
  )
}

export default Layout