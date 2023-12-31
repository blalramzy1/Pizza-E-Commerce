import { CartContext } from '../context/CartContext'
import React, { useContext, useState } from 'react'
import { BsHandbagFill } from 'react-icons/bs'

const CartMobileIcon = () => {
  const {isOpen, setIsOpen,itemsAmount } = useContext(CartContext);
  return (
    <div onClick={() => setIsOpen(!isOpen)} className=' bg-tertiary w-[72px] h-[72px] rounded-full flex justify-center items-center
     text-white cursor-pointer fixed right-[8%] bottom-[5%] z-20 lg:hidden'>
      <BsHandbagFill className='text-4xl'/>
      <span className='absolute text-white bottom-3 right-4 gradient 
      w-5 h-5 flex justify-center items-center rounded-full font-sans text-[13px]'>
        {itemsAmount}
      </span>
    </div>
  )
}

export default CartMobileIcon