import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ProductProvider } from "./context/ProductContext";
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Admin from "./pages/Admin"
import ProductList from "./pages/ProductList"
import ProductDetails from "./pages/ProductDetails"
import './App.css'

function App() {

  return (
    <ProductProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="products" element={<ProductList/>}>
            <Route path=":id" element={<ProductDetails/>}/>
          </Route>
          <Route path="/login" element={<Login />}/>
          <Route path="/admin" element={<Admin />}/>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  )
}

export default App
