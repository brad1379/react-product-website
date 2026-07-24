import { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ProductProvider } from "./context/ProductContext";
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import Admin from "./pages/Admin"
import ProductList from "./pages/ProductList"
import ProductDetails from "./pages/ProductDetails"
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("isAdmin") === "true"
  )

  function login() {
    localStorage.setItem("isAdmin", "true")
    setIsLoggedIn(true)
  }

  function logout() {
    localStorage.removeItem("isAdmin")
    setIsLoggedIn(false)
  }

  return (
    <ProductProvider>
      <BrowserRouter>
        <NavBar isLoggedIn={isLoggedIn} logout={logout}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="products" element={<ProductList/>}>
            <Route path=":id" element={<ProductDetails/>}/>
          </Route>
          <Route path="/login" element={
            isLoggedIn ? <Navigate to="/admin" replace/> : <Login login={login} />
          }/>
          <Route path="/admin" element={
            isLoggedIn ? <Admin/> : <Navigate to="/login" replace/>
          }/>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  )
}

export default App
