import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { database } from "./firebase.config";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(database.currentUser);

  useEffect(() => {
    database.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
