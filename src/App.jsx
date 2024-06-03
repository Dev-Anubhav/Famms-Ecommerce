import Navbar from "./Components/navbar";
import Home from "./Components/Home";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Products from "./Components/product";
import Cart from "./Components/Cart";
import Contact from "./Components/Contact";
import Testi from "./Components/testimonial";
import Login from "./Components/login";

import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Products  />}/> 
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/testimonial" element={<Testi />}/>
      <Route path="/login" element={<Login />}/>
     
    </Routes>

    </BrowserRouter>
   
     
    </>
  )
}

export default App
