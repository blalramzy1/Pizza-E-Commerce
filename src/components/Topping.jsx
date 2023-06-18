import Image from 'next/image';
import React,{ useState, useEffect } from 'react'
import { IoMdCheckmark } from 'react-icons/io'

const Topping = ({setadditionalTopping, additionalTopping, topping}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBox = () => {
    setIsChecked(!isChecked)
  }

  const handleTopping = () => {
    if (isChecked) {
      const newToppings = new Set([  ...additionalTopping , { ...topping}])
      setadditionalTopping(Array.from(newToppings))
    } else {
      const newToppings = additionalTopping.filter((toppingObj) => {
        return toppingObj.name !== topping.name
      })
      setadditionalTopping(newToppings)
    }
  }

  useEffect(() => {
    handleTopping()
  }, [isChecked])

  return (
    <div className={`${isChecked && 'border-orange'} w-full max-w-[110px] h-[140px] p-1 flex flex-col items-center justify-center
     border rounded-lg shadow-lg bg-white relative`}>
      <Image 
      className='mb-2'
      src={topping.image} 
      width={70} 
      height={70} 
      alt=''
      />
      <div className='text-sm capitalize text-center font-medium'>
        {topping.name}
      </div>
      <input className='absolute w-full h-full opacity-0 cursor-pointer' 
       onChange={handleCheckBox} type="checkbox" checked={isChecked}/>
      <div className={`${isChecked ? ' opacity-100' : 'opacity-0'} absolute top-1 right-1`}>
        <IoMdCheckmark className='text-xl text-orange'/>
      </div>
    </div>
  )
}

export default Topping