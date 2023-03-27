import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../charts/cartContext";
import { ProductContext } from "../../context/productContext";
function Product() {
  const { addItemToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const [f, setF] = useState(products);

  function filter(e) {
    const { value } = e.target;
    if (value === "all") {
      setF(products);
      return;
    }
    const filtering = products.filter((product) => product.type === value);
    setF(filtering);
  }

  return (
    <div className="product">
      <div className="container my-5 py-5">
        <div className="raw">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder">lastest Product</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-contect-center mb-5 pb-5">
          <div className="buttons mb-3">
            <button value="all" onClick={filter} className="btn btn-info m-1">
              All clothing
            </button>
            <button
              value="women"
              onClick={filter}
              className="btn btn-secondary  m-1"
            >
              Women's clothing
            </button>
            <button
              value="men"
              onClick={filter}
              className="btn btn-success m-1"
            >
              men's clothing
            </button>
          </div>
          <div className="row">
            {f.map((File) => {
              return (
                <div className="col-md-3 mb-5">
                  <div class="card h-100 text-center p-4" key={File.id}>
                    <img
                      src={File.imageUrl}
                      class="card-img-top"
                      alt={File.name}
                      height="150px"
                      width="300px"
                    />
                    <div class="card-body">
                      <h5 class="card-title">{File.name}</h5>
                      <p class="card-text">{File.type}</p>
                      <p class="card-text">${File.price}</p>
                    </div>
                    <Link
                      className="btn btn-primary"
                      to={`/product/${File.id}`}
                    >
                      Product detail
                    </Link>
                    <button
                      className="btn btn-info mt-2"
                      onClick={() => addItemToCart(File)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
