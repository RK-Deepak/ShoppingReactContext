import React, { useEffect } from 'react'
import { useState } from 'react';
import useFetchData from './useFetchData';
const useSearch = (param) => {
    
    
const [searchtext,setserchtext]=useState("");


let {isloading,categories,error}=param?useFetchData(`https://fakestoreapi.com/products/category/${param}`):useFetchData("https://fakestoreapi.com/products/");
const [category1,setcategory1]=useState(categories);
    

useEffect(()=>
{
    let timerid=null;
    if(searchtext!=="")
        {
           
            if(timerid)
            {
                clearInterval(timerid)
            }
   timerid= setTimeout(()=>
    {
        
              let filterdata=categories.filter((category)=>category.title.toLowerCase().includes(searchtext.toLowerCase()));
             
              setcategory1(filterdata)
              
              
                    
        
    },500)
   

}
else 
{
    setcategory1(categories)
}
    return ()=>clearInterval(timerid)
    
   
},[searchtext,categories])

function handlesearch(e)
{
            setserchtext(e.target.value)  ;
}

function sortbyrating()
{
    let filterdata=categories.filter((category)=>category.rating.rate>=4);
         
          setcategory1(filterdata)
}

function giveall()
{
    setcategory1(categories)
}
function searchbyclick(e)
{
    e.preventDefault();
    let filterdata=categories.filter((category)=>category.title.toLowerCase().includes(searchtext.toLowerCase()));
             
    setcategory1(filterdata)
    setserchtext("")
}





        return {isloading,category1,error,searchtext,handlesearch,sortbyrating,giveall,searchbyclick}
        
    
       
  
}

export default useSearch