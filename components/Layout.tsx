import React from 'react';
import 'tailwindcss/tailwind.css';
import { NavBar, Footer } from './';

type ChildrenProps = {
    children?: React.ReactNode
}

const Layout:React.FC<ChildrenProps> = ({children}) => {
  return (
    <>
        <NavBar />
        {children}
        <Footer />
    </>
  )
}

export default Layout