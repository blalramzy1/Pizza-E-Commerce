import Image from 'next/image'
import React,{ useState,useEffect, useContext } from 'react'
import SizeSelection from './SizeSelection'
import CrustSelection from './CrustSelection'
import Topping from './Topping'
import {BsCurrencyDollar} from 'react-icons/bs'
import { CartContext } from '../context/CartContext'


const PizzaDetails = ({ pizza, setModal }) => {
  const [size, setSize] = useState('small');
  const [curst, setCurst] = useState('traditional');
  const [additionalTopping, setadditionalTopping] = useState([]);
  const [additionalToppingPrice, setadditionalToppingPrice] = useState(0);
  const [price, setPrice] = useState(0);

  const { addToCart,setCart } = useContext(CartContext)

  useEffect(() => {
    size === 'small' 
    ? setPrice(parseFloat(pizza.priceSm + additionalTopping).toFixed(2)) :
    size === "medium" 
    ? setPrice(parseFloat(pizza.priceMd + additionalTopping).toFixed(2)) :
    size === 'large' 
    ? setPrice(parseFloat(pizza.priceLg + additionalTopping).toFixed(2)) :
    null;
  }, )

  useEffect(() => {
    if (additionalTopping.length > 0) {
      const toppingPrice = additionalTopping.reduce((a,c) => {
        return a + c.price
    }, 0)
    setadditionalToppingPrice(toppingPrice)
    } else {
      setadditionalToppingPrice(0)
    }
  },[additionalTopping]);
  return (
    <div className='flex flex-col lg:flex-row lg:gap-x-8 h-full md:p-8'>
      <div className='lg:flex-1 flex justify-center items-center'>
        <div className='lg:w-[300px] mx-auto w-[230px] mt-6 lg:mt-0'>
          <Image className='mx-auto relative' width={450} height={450} src={pizza.image} alt='' property={1}/>
        </div>
      </div>

      <div className='flex flex-col flex-1'>
        <div className='flex-1 p-2 text-center lg:text-left'>
          <div className='flex-1 overflow-y-scroll scrollbar-thin
         scrollbar-thumb-secondary h-[45vh] lg:h-[70vh]'>
            <div className='font-semibold'>
                <h2 className='capitalize text-3xl mb-1'>{pizza.name}</h2>
                <div>
                  <span>{size === 'small' ? '25 cm' :
                  size === 'medium' ? '30 cm' :
                  size === 'large' ? '35 cm': null }
                  </span>
                  <span>, {curst} curst</span>
                </div>
            </div>
            <SizeSelection pizza={pizza} setSize={setSize} size={size}/>
            <CrustSelection curst={curst} setCurst={setCurst}/>
            <div className='mb-4 text-xl font-bold'>Choose topping</div>
            <div className='flex flex-1 flex-wrap gap-2 py-1 
            justify-center lg:justify-start'>
              {pizza.toppings?.map((topping,index) => {
                return <Topping 
                setadditionalTopping={setadditionalTopping}  
                key={index}
                additionalTopping={additionalTopping}
                topping={topping}
                />
              })}
            </div>
          </div>
        </div>
        <div className='h-full flex items-center justify-center px-3 lg:items-end'>
          <button onClick={() => 
          {
          addToCart(
            pizza.id,
             pizza.image,
              pizza.name,
               price,
                additionalTopping,
                size, 
                curst
                ),
                setModal(false)
                }} className=' btn btn-lg gradient w-full flex gap-x-2 justify-center'>
            <div>Add to cart for</div>
            <div className='flex items-center'>
              <BsCurrencyDollar/>
              <p>{price}</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PizzaDetails