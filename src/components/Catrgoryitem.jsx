import React from 'react'
import { NavLink } from 'react-router-dom'

const Catrgoryitem = ({category,setshowmenu}) => {
  return (
    <div className='text-sm font-bold  '>
       <NavLink to={`products/categories/${category}`}  onClick={setshowmenu}>{category.toUpperCase()}
       </NavLink>

        </div>
       
  )
}

export default Catrgoryitem