import React from 'react'
import { MdDelete } from "react-icons/md";
import useCart from '../context/CartContext';


function CartItem({item}) {
 const{removeItem}=useCart();
  return (
    
    <div className='flex border-2 justify-between p-2 my-2 items-center gap-4 '>
      <div className='flex flex-col gap-4 w-[200px] justify-center '>
      <img src={item.image} alt='' className='w-[80px] aspect-square '/>
      <span className='text-xs'>{item.title}</span>
      </div>
      <div className=' flex  justify-center items-center'>
      <span className='my-2 border-2 h-fit px-2 aspect-square'>{item.quantity}</span>
      <MdDelete onClick={()=>removeItem(item.id)}/>
      </div>
      <div className='font-bold text-slate-600'>
        Total:Rs.{item.price*item.quantity}
      </div>
      
      
    </div>
   
  
  )
}

export default CartItem