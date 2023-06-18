import React,{useState, useEffect, useContext} from 'react'
import Image from 'next/image'
import { CartContext } from '@/context/CartContext'

const CheckOutDetails = ({ setModal }) => {
  const {cart, setCart, cartTotal} = useContext(CartContext)
  const [successMsg, setSuccessMsg] = useState(false);
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() =>{
        if (count > 1) {
          setCount(count - 1)
        }
      }, 1000)
      return () => clearTimeout(timer)
    }
  })
  useEffect(() => {
    if (successMsg) {
    const timer = setTimeout(() => {
      setSuccessMsg(false)
      setCart([])
      setModal(false)
    }, 5000)
    return () => clearTimeout(timer)
  }
  }, [successMsg])
  return (
    successMsg ? ( 
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <h2 className='text-2xl font-semibold text-center'>Thank you! the order has been placed</h2>
      <Image src={'/success-1.gif'} width={150} height={150} alt=''/>
      <div>
        this window woll close in <span>{count}</span> seconds
      </div>
    </div> ) : (
      <div>
        <div className='lg:gap-x-8 h-full lg:px-18 lg:py-8'>
          <h2 className='mb-4 text-[20px] uppercase font-semibold flex flex-col items-center justify-center lg:text-left 
          pt-4 lg:pt-0'>Shipping & Checkout</h2>
  
          <div className='h-[86vh] lg:h-[47.5vh] flex flex-col lg:flex-row lg:gap-x-4'>
            <div className='flex-1 h-full overflow-y-auto scrollbar-thin
           scrollbar-thumb-secondary
            lg:overflow-visible py-4 px-8 lg:py-0 lg:px-0'>
              <div className='flex flex-col gap-4 h-full p-4'>
                <div className='flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4'>
                  <input type="text" placeholder='First Name' className='w-full input'/>
                  <input type="text" placeholder='Last Name' className='w-full input'/>
                </div>
                <div className='flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4'>
                  <input type="text" placeholder='Phone' className='w-full input'/>
                  <input type="text" placeholder='Email Address' className='w-full input'/>
                </div>
                <div className='flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4'>
                  <input type="text" placeholder='Street Name' className='w-full input'/>
                  <input type="text" placeholder='Street NO.' className='w-full input'/>
                </div>
                <div className='flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4'>
                  <input type="text" placeholder='Block' className='w-full input'/>
                  <input type="text" placeholder='Floor' className='w-full input'/>
                  <input type="text" placeholder='Apt No.' className='w-full input'/>
                </div>
                <div className='flex-1 h-full'>
                  <textarea placeholder='Mentions (optional)' className='textarea lg:h-44 w-full h-full'></textarea>
                </div>
              </div>
            </div>
            <div className='flex-1 h-full lg:max-w-[40%] 
            flex flex-col justify-between pt-3 px-8 lg:p-0'>
              <div className='border rounded-lg flex flex-col mb-4 mr-4 p-4 h-full'>
                <h3 className='text-base font-medium uppercase mb-4 border-b pb-4'>Your order</h3>
                <div className='overflow-y-scroll overflow-hidden scrollbar-thin
                 scrollbar-thumb-secondary font-semibold flex flex-col gap-y-4 h-full py-2'>
                  {cart.map((pizza,index) => {
                    return (
                      <div className='flex justify-between text-[15px]'
                      key={index}>
                        <div>
                          <div className='flex gap-x-2'>{pizza.name}</div>
                          <div className='capitalize '>{pizza.amount > 0 && `x ${pizza.amount}`}</div>
                        </div>
                        <div>
                          {parseFloat(pizza.price * pizza.amount).toFixed(2)}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className='px-4 flex flex-col justify-center items-center'>
              <button onClick={() => setSuccessMsg(true)} className='btn btn-lg gradient w-full mr-4'>Place order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default CheckOutDetails