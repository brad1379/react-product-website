import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import ProductList from "./pages/ProductList"
import ProductCard from "./pages/ProductCard"
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="products" element={<ProductList/>}>
          <Route path=":id" element={<ProductCard/>}/>
        </Route>
        <Route path="/login" element={<Login />}/>
        <Route path="/admin" element={<Admin />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
