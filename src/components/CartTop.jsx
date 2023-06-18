import { CartContext } from '../context/CartContext'
import React, { useContext } from 'react'
import { IoMdCloseCircleOutline } from 'react-icons/io'

const CartTop = () => {
  const { setIsOpen,itemsAmount } = useContext(CartContext)
  return (
    <div className='w-full h-20 border-b flex items-center justify-between px-10'>
        <div className=' font-semibold'> Shopping Bag ({itemsAmount}) </div>
        <div onClick={() => setIsOpen(false)} 
        className='cursor-pointer group '>
         <IoMdCloseCircleOutline className='text-3xl group-hover:scale-110 duration-300 transition-all'/>
        </div>
    </div>
  )
}

export default CartTop