import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { CartContextProvider } from './context/CartContext'


function App() {

  

 
return (
  <CartContextProvider>
    <div>
     <Header />
     <Outlet/>
    </div>
    </CartContextProvider>
   
  )
}

export default App
