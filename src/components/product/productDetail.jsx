import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../charts/cartContext";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/productContext";

function ProductDetail() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const data = products.find((product) => product.id === Number(id));
    setProduct(data);
    console.log();
  }, []);
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="m-4 ">
      <h1 className="car-title text-muted text-uppercase text-black-50">
        {product.name}{" "}
      </h1>
      <div className="row">
        <div className="col-md-6">
          <img
            className="card-img-top object-fit"
            src={product.imageUrl}
            alt=""
            height="500px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h1 className="car-subtitle"> Product Detail</h1>
          <p>{product.detail && product.detail}</p>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              <br /> Eius, dignissimos autem vero earum nemo, odit reiciendis
              <br />
              similique tempore nihil eaque dolores sed a, beatae aliquid
              <br />
              voluptas maxime natus consectetur provident!
            </p>
          </div>
          <div>
            <h6>Price: ${product.price}</h6>
          </div>
          <div>
            <h6>Category: {product.type}</h6>
          </div>
          <button onClick={addProductToCart} className="btn btn-info m-6 ">
            buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
