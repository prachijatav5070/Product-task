import React from 'react'
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import LoginLayout from './Components/Login/LoginLayout'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import Login from './Pages/Login'
import AddProductForm from './Pages/AddProductForm'
import DisplayProduct from './Pages/DisplayProduct'

const App = () => {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/login' element={<LoginLayout/>}>
  <Route index element={<Login/>}></Route> 
  </Route>


  <Route path='/' element={<Layout/>} >
    <Route index element={<Home/>}/>
    <Route path= "addproduct" element={<AddProductForm/>}></Route>
    <Route path= "display" element={<DisplayProduct/>}></Route>

  </Route>

  

</Routes>
</BrowserRouter>

</>  )
}

export default App