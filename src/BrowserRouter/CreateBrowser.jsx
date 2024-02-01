import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Productlist from '../components/Productlist'
import ErrorPage from '../components/ErrorPage'
import App from '../App'
import Cart from '../components/Cart'
     
    const approuter=createBrowserRouter([
        {
            path:"/",
            element:<App/>,
            children:[
                {
                    path:"/",
                    element:<Productlist/>
                },
                {
                    path:"/products/categories/:categoryName",
                    element:<Productlist/>
                },
                {
                    path:"/cart",
                    element:<Cart/>
                },
             
            ],
            errorElement:<ErrorPage/>
        }
    ])


export default approuter;