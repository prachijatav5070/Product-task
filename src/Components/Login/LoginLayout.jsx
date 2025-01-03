import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
const LoginLayout = () => {
    return(
        <>

        <Header/>
        <hr size="4" />
        <Outlet/>
        <hr />
        <Footer/>

        </>
    )
  
}

export default LoginLayout