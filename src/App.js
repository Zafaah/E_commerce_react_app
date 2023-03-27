import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Product from "./components/product/Product";
import Nav from "./components/nav";
import ProductDetail from "./components/product/productDetail";
import Checkout from "./components/charts/checkout";
import Contect from "./components/contect/contect";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index={true} element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/Contect" element={<Contect/>} />
          <Route path="/chart" element={<Checkout />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
