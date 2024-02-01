import React, { useState } from 'react'
import Loader from '../loader/loader';
import Catrgoryitem from './Catrgoryitem';
import { FaBurger,  FaOpencart } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

import useFetchCategories from '../hooks/useFetchCategories';
import useCart from '../context/CartContext';
import { Link, NavLink } from 'react-router-dom';



const Header = () => {
    const {totalquantity} =useCart();
    const [showmenux,setshowmenu]=useState(false)
    
    const {isloading,categories,error}=useFetchCategories("https://fakestoreapi.com/products/categories",[]);
    if(isloading)
    {
        return <Loader/>
    }
   
    function showmenu()
    {
         setshowmenu(prev=>!prev)
         console.log(showmenux)
    }
    
  return (
    <div className='flex justify-between px-4  py-2 bg-blue-300 items-center '>
        <div className={`gap-2  sm:flex sm:flex-row sm:relative   flex-col ${showmenux?"flex":"hidden"} absolute top-[41px] sm:top-0 p-2 rounded-md bg-slate-500 `}>
           {categories && categories.map((category)=><Catrgoryitem  key={category} category={category}
           setshowmenu={showmenu}/>)}
           <NavLink to="/" className='text-sm uppercase font-bold' onClick={showmenu}>All Items</NavLink>
          
           </div>
          {!showmenux?<FaBurger className='sm:hidden block text-2xl' onClick={showmenu} />:<MdCancel className='sm:hidden block text-2xl' onClick={showmenu}/>} 

          
           <div className='relative px-2 rounded-full bg-green-500'>
          <Link to="/cart"><FaOpencart className='text-2xl'/></Link>
           <span className='absolute right-[5px] -top-[10px] font-bold text-red-800  rounded-full'> {totalquantity?totalquantity:"" }</span>
          </div>

    </div>
  )
}

export default Header;