import React,{useState, useContext} from 'react'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import CheckOutDetails from './CheckOutDetails'
import Modal from 'react-modal'
import { CartContext } from '@/context/CartContext'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GrFormClose } from 'react-icons/gr'

const CartBottom = () => {
  const { setIsOpen, cart, cartTotal } = useContext(CartContext)
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }
  const modalStyle = {
    overlay: {
      backgroundColor: 'rgba(0,0,0,0,5)'
    }
  }
  Modal.setAppElement('body')
  return (
    <div className='px-6 py-3 lg:py-6 mt-auto'>
      {cart.length >= 1 ? <div>
        <div className='flex items-center justify-between mb-6 text-lg
         font-semibold'>
          <div className='flex'>
          <div>Total:</div>
          <div className='flex items-center'>
            <BsCurrencyDollar/>
            <span>{parseFloat(cartTotal).toFixed(2)}</span>
          </div>
          </div>
          <div className='flex flex-col gap-y-3 px-3'>
            <button onClick={() => {
              setIsOpen(false),setModal(true)
            }} className='btn btn-lg gradient font-semibold flex justify-center'>Checkout</button>
          </div>
        </div>
      </div> : 
      <div className='absolute top-0 mx-auto left-0 right-0 w-full h-full flex justify-center items-center -z-10'>
        <div className='text-[32px] font-semibold'>Your Cart is Empty</div>
      </div> 
      }
      {modal && (
      <Modal className='bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] 
      lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none'
      isOpen={modal} style={modalStyle} onRequestClose={closeModal} contentLabel='checkout Modal' 
      >
        <GrFormClose onClick={closeModal}
        className='absolute top-5 right-5 text-3xl hover:scale-110 duration-200 cursor-pointer'/>
        <CheckOutDetails setModal={setModal}/>
      </Modal>
      )}
    </div>
  )
}

export default CartBottom