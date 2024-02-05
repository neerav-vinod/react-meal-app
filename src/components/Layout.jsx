import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
        <Navbar/>
        <div style={{minHeight:"90vh"}}>
        {children}
        </div>
        <Footer/>
    </>

    
  )
}

export default Layout