import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
    const [isOpen , setIsOpen] = useState(false)
    const nav = useNavigate();
  return (
  <div className=' flex p-6 justify-between items-center relative shadow-md'>
        <div>
            <h1 onClick={()=>nav('/')} className='text-2xl font-semibold cursor-pointer' >My <span className='font-bold text-orange-500 ' >Meal</span></h1>
        </div>

        <div className='hidden md:flex gap-3'>
            <div className=' cursor-pointer' onClick={()=>nav('/')}>
                <p>Home</p>
            </div>

            <div className=' cursor-pointer' onClick={()=>nav('/categories')}>
                <p>Categories</p>
            </div>

            <div className=' cursor-pointer' onClick={()=>nav('/all-dishes')}>
                <p>Dishes</p>
            </div>
        </div>

        <div className='flex md:hidden cursor-pointer transition ' >
            <div onClick={()=>setIsOpen(!isOpen)}>
            {!isOpen ? <FaBars /> : <IoClose />}
            </div>
        </div>

        { isOpen &&  
            <div className=' z-10 md:hidden transition flex gap-5 absolute p-5 right-3 bg-white top-20 flex-col'>
            <div className=' cursor-pointer' onClick={()=>nav('/')} >
                <p>Home</p>
            </div>

            <div className=' cursor-pointer' onClick={()=>nav('/categories')}>
                <p>Categories</p>
            </div>

            <div className=' cursor-pointer' onClick={()=>nav('/all-dishes')}>
                <p>Dishes</p>
            </div>

        </div>
        }


  </div>
  )
}

export default Navbar