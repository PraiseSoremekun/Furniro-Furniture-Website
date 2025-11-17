import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ProductDetails from "./pages/ProductDetails";


const App =  () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/product-details/:id' element={<ProductDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App