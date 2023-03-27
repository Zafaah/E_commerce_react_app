 import React from "react";
import { useContext } from "react";
import { CartContext } from "./charts/cartContext";
import { Link, Outlet } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";


function Nav() {
  const { cartCount } = useContext(CartContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark py-3 sticky-top">
        <div className="container">
          <Link className="navbar-brand fw-bold font-monospace" to={"/"}>
            <h2>
              <BiShoppingBag size={40} className="m-1" />
              Online Shopping
            </h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/product"}>
                  Product
                </Link>
              </li>
            
              <li className="nav-item">
                <Link className="nav-link active" to={"/Contect"}>
                  Contect
                </Link>
              </li>
            </ul>
            <div className="buttons text-light">
              <Link
                className="btn btn-outline-light 1px text-light"
                to={"/login"}
              >
                <FiLogIn size={20} className="ms-2" />
                Login
              </Link>

              <Link
                className="btn btn-outline-light ms-2 position-relative text-light"
                to={"/Chart"}
              >
                <AiOutlineShoppingCart size={20} className="ms-2" />
                Cart
                <span className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle  ">
                  {cartCount}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
export default Nav;
