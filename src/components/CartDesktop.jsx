import React,{ useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import CartTop from './CartTop'
import CartItem from './CartItem'
import CartBottom from './CartBottom'

const CartDesktop = () => {
    const { isOpen, cart } = useContext(CartContext)
  return (
    <div className={`${isOpen ? 'left-0' : ' -left-full' }
     bg-white fixed top-0 bottom-0 w-[400px] shadow-2xl lg:flex hidden flex-col transition-all duration-300 z-10`}
     >
      <div>
      <CartTop/>
      <div className={` px-10 flex flex-col gap-y-4 h-[65vh] py-3 mr-4 mt-8 ${ cart.length >= 3 && 'overflow-y-scroll scrollbar-thin scrollbar-thumb-secondary'} `}>
        {cart.map((pizza,index) => {
          return <CartItem pizza={pizza} key={index}/>
        })}
      </div>
      <CartBottom/>
      </div>
     </div>
  )
}

export default CartDesktop