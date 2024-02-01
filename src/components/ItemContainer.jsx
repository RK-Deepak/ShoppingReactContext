import React from 'react'
import AddItem from './AddItem'

const ItemContainer = ({item}) => {
  return (
    <div className='flex flex-col gap-2 border-2 w-[200px] p-2 items-center text-center'>
      < img src={item.image} alt='' className='w-[80px] h-[120px]'/>
      <p className='font-bold text-md'>{item.title.length>25?item.title.slice(0,25):item.title}</p>
      <p className='font-semibold text-sm text-green-400'>{item.description.length>120?item.description.slice(0,80):item.description}</p>
      <p className='font-bold text-red-400'>Rs.{item.price}</p>
      <p className='font-bold text-sm'>Rating:{item.rating.rate}</p>
      <AddItem item={item}/>
    </div>
  )
}

export default ItemContainer