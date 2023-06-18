import { CartContext } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useContext } from 'react'

const Navbar = () => {
  const {setIsOpen, isOpen, itemsAmount} = useContext(CartContext)
  return (
    <nav className='absolute w-full py-8'>
      <div className='container mx-auto flex flex-col lg:flex-row gap-y-3 
      justify-between items-center'>
        <Link href={'/'} className=' max-w-[160px] lg:max-w-max'>
        <Image width={180} height={180} src={'logo.svg'} alt=''/>
        </Link>
        <div className='flex gap-x-8 items-center'>
          <div className='flex gap-x-3 items-center'>
            <Image src={'phone.svg'} width={42} height={42} alt=''/>
            <div className='text-white'>
              <div className='font-sans text-center uppercase font-medium leading-none text-sm'>24/7 Pizza delvery service</div>
              <div className='text-3xl font-sans font-extrabold leading-none tracking-wide'>920 234 5768</div>
            </div>
        </div>
        <div>
          <div onClick={() => setIsOpen(!isOpen)} className='relative cursor-pointer hidden lg:flex'>
            <Image src={'bag.svg'} width={38} height={38} alt=''/>
            <div className='bg-tertiary w-6 h-6 flex items-center justify-center text-white text-[13px] rounded-full absolute -bottom-2 -right-1 p-2 text-xs'>{itemsAmount}</div>
          </div>
        </div>
       </div>
      </div>
    </nav>
  )
}

export default Navbar