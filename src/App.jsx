import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import ProductContainer from "./pages/ProductContainer"
import ProductList from "./pages/ProductList"
import ProductCard from "./pages/ProductCard"
import ProductForm from "./pages/ProductForm"


import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/products" element={<ProductContainer/>}>
          <Route path="new" element={<ProductForm/>}/>
          <Route path="" element={<ProductList/>}/>
          <Route path=":id" element={<ProductCard/>}/>
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="products" element={<ProductList/>}/>
          <Route path="products/:id" element={<ProductCard/>}/>
          <Route path="products/new" element={<ProductForm/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
