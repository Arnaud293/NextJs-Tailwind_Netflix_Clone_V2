import React from 'react';
import 'tailwindcss/tailwind.css';
import { NavBar } from './';

type Props = {
    children?: React.ReactNode
}

const Layout = (props: Props) => {
  return (
    <>
        <NavBar />
        {props}
    </>
  )
}

export default Layout