import React from 'react';
import Image from 'next/image';
import { GrFormClose } from 'react-icons/gr'
import {BsCurrencyDollar} from 'react-icons/bs'
import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';


const CartItem = ({ pizza }) => {
  const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext)
  return (
    <div className='select-none'>
      <div className='flex w-full gap-x-4 mb-2'>
        <div className='flex justify-center items-center'>
          <Image width={90} height={90} src={pizza.image} alt='' />
        </div>
        <div className='flex-1 flex flex-col'>
          <div className='text-lg capitalize font-bold'>{pizza.name}</div>
          <div className='flex-1 flex flex-col gap-y-2'>
            <div className='capitalize font-medium text-[15px]'>{pizza.crust} crust</div>
            <div className='capitalize font-medium mb-2 text-[15px'>{pizza.size} size</div>
            <div className='flex items-center gap-x-1'>
              <div onClick={() => decreaseAmount(pizza.id, pizza.price)} className='w-[18px] h-[18px] flex justify-center 
              items-center cursor-pointer text-white
               gradient rounded-full'>
                  -
              </div>
              <div className='font-semibold flex flex-1 max-w-[30px] justify-center items-center text-sm'>{pizza.amount}</div>
              <div onClick={() => increaseAmount(pizza.id, pizza.price)} className='w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white gradient rounded-full'>
                +
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-between flex-col'>
        <div onClick={() => removeFromCart(pizza.id, pizza.price, pizza.crust)} className='text-2xl flex justify-center items-center self-end cursor-pointer 
        hover:scale-110 duration-200 transition-all text-orange'>
          <GrFormClose/>
        </div>
        <div className='flex items-center text-lg font-medium'>
          <BsCurrencyDollar/>
          <span>{parseFloat(pizza.price * pizza.amount).toFixed(2)}</span>
        </div>
      </div>
      </div>
      <div className='flex flex-wrap items-center gap-3 p-2 border-b pb-4'>
      <div>Toppings: {pizza.additionalTopping.length === 0 && 'None'}</div>
      {pizza.additionalTopping.map((topping, index) => {
        return (
          <div className='capitalize text-sm gradient font-medium px-3 
          py-1 rounded-full leading-none'
            key={index}>
            {topping.name}
          </div>
        )
      })}
    </div>
   </div>

  );
};

export default CartItem;
