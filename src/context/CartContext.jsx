import { createContext, useContext, useState } from "react";

export const CartContext=createContext();

export const CartContextProvider=({children})=>
{
          const [totalquantity,settotalquantity]=useState(0);
          const [cartitems,setcartitems]=useState({});

        
          const addItem=(product)=>
          {
            const updatedcart={...cartitems};
             if(updatedcart[product.id])
             {
                updatedcart[product.id].quantity+=1;
               
             
               

             }
             else 
             {
                      updatedcart[product.id]={...product,quantity:1};
                  
                      
             }
             setcartitems(updatedcart);
             settotalquantity(totalquantity+1)
           
             
          }
          
        
          const removeItem=(id)=>
          {
            let updatedcart={...cartitems};
           
                updatedcart[id].quantity-=1;
        
            if(updatedcart[id].quantity<=0) 
            {
                delete updatedcart[id];
            }
            setcartitems(updatedcart);
            settotalquantity(totalquantity-1)
          }

         
          const value={
            cartitems,totalquantity,addItem,removeItem,setcartitems,
           
          }

          return <CartContext.Provider value={value}>
            {children}
          </CartContext.Provider>
}

export default function useCart()
{
    return useContext(CartContext);
}
