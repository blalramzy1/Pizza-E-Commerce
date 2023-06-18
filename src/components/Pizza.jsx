import Image from 'next/image'
import React, { useState } from 'react'
import Modal from 'react-modal'
import PizzaDetails from './PizzaDetails'
import {IoMdCloseCircleOutline} from 'react-icons/io'

Modal.setAppElement('body')

const modalStyle ={
  overlay: {
    backgroundColor: 'rgba(0,0,0,0,5)',
  }
}
const Pizza = ({ pizza }) => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }
  return (
    <div className='group py-2 xl:py-4 xl:px-2 rounded-xl'>
      <Image onClick={openModal} className='lg:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer' 
      width={270} 
      height={270} 
      src={pizza.image} 
      property={1} 
      alt=''/>

      <div>
        <div className=' text-xl font-bold capitalize pb-1 cursor-pointer'> 
          {pizza.name}
        </div>
      </div>

      <div className='text-sm font-medium min-h-[60px] mb-6'>
        {pizza.description}
      </div>
      <div className='flex items-center justify-between mb-6'>
      <div className='hidden lg:flex text-xl font-semibold '>
        starts at {pizza.priceSm}
      </div>

      <button onClick={openModal} className='hidden lg:flex gradient
       text-white rounded-lg btn-sm font-semibold text-sm py'
      >Choose
      </button>

      <button onClick={openModal} className='lg:hidden btn btn-sm gradient text-sm px-3'>starts at {pizza.priceSm}</button>
      </div>
      {modal && <Modal isOpen={modal} 
      style={modalStyle} onRequestClose={closeModal} 
      contentLabel='Pizza Modal'
      className='bg-white w-full h-full  lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] 
      lg:fixed lg:top-[50%] left-[50%] lg:translate-x-[-50%] 
      lg:translate-y-[-50%] outline-none '
      >
        <div className='absolute z-30 right-2 top-2 hover:scale-110 duration-300 cursor-pointer'
        onClick={closeModal}
        >
          <IoMdCloseCircleOutline className='text-4xl text-orange'/>
        </div>
        <PizzaDetails pizza={pizza} modal={modal} setModal={setModal}/>
      </Modal>  }
    </div>
  )
}

export default Pizza