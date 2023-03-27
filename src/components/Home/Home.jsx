import React from "react";
import Product from "../product/Product";

function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white">
        <img
          src="../images/bgk.avif"
          className="card-img"
          alt="background"
          height="550px"
          width="100px"
        />
        <div className="card-img-overlay d-flex flex-column ">
          {/* <div className="container">
            <h5 className="card-title dislplay-3 fw-bolder msb-0">
              Welcome Zafah online Shopping
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              <br /> Eius, dignissimos autem vero earum nemo, odit reiciendis
              <br />
              similique tempore nihil eaque dolores sed a, beatae aliquid
              <br />
              voluptas maxime natus consectetur provident!
            </p>
          </div> */}
        </div>
      </div>
      <Product />
    </div>
  );
}

export default Home;
