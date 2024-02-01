import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useFetchCategories = (url,initalData) => {

    const [categories,setcategories]=useState(initalData);
    const [error,seterror]=useState("");
    const [isloading,setisloaoding]=useState(false)
    async function fetchdata()
    {
        try 
        {
            setisloaoding(true);
            const requireddata=await axios.get(url);
          
            setcategories(requireddata?.data);
            seterror(null)
    
        }
        catch(error)
        {
            seterror(error);
            setcategories(null)
        }
        finally
        {
            setisloaoding(false)
        }
    }
  

    useEffect(()=>
    {
        fetchdata();
    },[])


return {isloading,categories,error};


  
}

export default useFetchCategories;