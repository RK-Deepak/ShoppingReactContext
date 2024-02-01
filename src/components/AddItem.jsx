import React from 'react'
import useCart from '../context/CartContext'


const AddItem = ({item}) => {


  
  const {cartitems,totalquantity,addItem,removeItem}=useCart();
 



 

  return (
    <div>{
        totalquantity>0 && cartitems[item.id] ?
        <div className='flex gap-1'>
          <button onClick={()=>removeItem(item.id)} className='px-1 dont-bold bg-green-400'>-</button>
          <span className='font-bold'>{cartitems[item.id].quantity}</span>
          <button onClick={()=>addItem(item)} className='px-1 dont-bold bg-green-400'>+</button>
        </div>:
      <button className='bg-green-400 py-1 px-2 font-semibold rounded-md' onClick={()=>addItem(item)}>Add Item</button>
      }
        
       
    
    </div>
  )
}

export default AddItem