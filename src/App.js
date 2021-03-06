import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import ShopDetail from "./pages/Shop/ShopDetail";
import Blog from "./pages/Blog/Blog";
import BlogDetail from "./pages/Blog/BlogDetail";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";


function App() {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/shop" element={<Shop/>} />
              <Route path="/shop/:id" element={<ShopDetail/>} />
              <Route path="/blog" element={<Blog/>} />
              <Route path="/blog/:id" element={<BlogDetail/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/checkout" element={<Checkout/>} />
          </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
