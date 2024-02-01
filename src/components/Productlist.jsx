import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../loader/loader';
import ItemContainer from './ItemContainer';
import useSearch from '../hooks/useSearch';


const Productlist = () => {
  const params = useParams();
  let param = params.categoryName;

  const {
    isloading,
    category1,
    error,
    searchtext,
    handlesearch,
    sortbyrating,
    giveall,
    searchbyclick
   
  } = useSearch(param);

 


  if (isloading) {
    return <Loader />;
  }

  return (
    <div className='flex min-h-screen my-2 justify-center flex-col items-center'>
      {category1 && (
        <div className='flex sm:flex-row flex-col gap-2 '>
          <input
            type='text'
            value={searchtext}
            onChange={handlesearch}
            className='border-2 outline-none border-red-800 placeholder:Enter query.. px-2 py-1'
          ></input>
          <div className='flex sm:flex-row flex-col gap-2'>
          <button className='rounded-md bg-yellow-300 px-2 py-1 ' onClick={searchbyclick}>Search</button>
          <button className='rounded-md bg-yellow-300 px-2 py-1 ' onClick={sortbyrating}>
            Top Rated
          </button>
          <button className='rounded-md bg-yellow-300 px-2 py-1 ' onClick={giveall}>
            All
          </button>
          </div>
        </div>
      )}
      <div className='flex gap-2 justify-evenly flex-wrap my-2'>
        {category1 && category1.map((category) => <ItemContainer key={category.id} item={category} />)}
      </div>
      {category1 &&<div className='flex gap-1'>
        <button className='rounded-md bg-green-300 px-2 py-1 '>Previous</button>
        <button className='rounded-md bg-green-300 px-2 py-1 ' >
          Next
        </button>
      </div>}
    </div>
  );
};

export default Productlist;
