import React, { useState } from 'react'
import useCart from '../context/CartContext'
import CartItem from './CartItem';

const Cart = () => {
    const {cartitems}=useCart();
    const cartitemsarr=[];
    let totalamount=0;
    for(let key in  cartitems)
    {
         cartitemsarr.push(cartitems[key])
         totalamount+=(cartitems[key].price*cartitems[key].quantity);
         totalamount=Math.round(totalamount,2)
    }
 
   
    return (
        totalamount !== 0 ? (
          <div className='flex sm:flex-row flex-col justify-between px-2 gap-2'>
            <div className='w-full sm:w-[75%] '>
              {cartitemsarr.map((cartitem) => <CartItem key={cartitem.id} item={cartitem} />)}
            </div>
            <div className='flex self-center flex-col items-center border-2 h-full p-4 gap-2 mb-2'>
              <span className='font-semibold'>Checkout Amount: Rs {totalamount}</span>
              <button className='font-bold px-2 py-1 bg-green-600 rounded-md'>CheckOut</button>
            </div>
          </div>
        ) : (
          <span className={totalamount === 0 ? "w-[100%] flex min-h-screen justify-center items-center" : ""}>
            Start Shopping
          </span>
        )
      );
      
}

export default Cart