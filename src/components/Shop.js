import React from "react";
import uniqid from "uniqid"

import Header from "./Header"
import { productsList } from "./Products"
import Product from "./Product"

function Shop () {
  return(
    <>
    <Header />
    <div className="bg-cultured min-h-screen flex flex-wrap justify-center items-center ">
      {productsList.map((product) => 
        <Product key={uniqid()} productName={product.name} productImage={product.image} productPrice={product.price} />
      )}
    </div>
    </>
  )
}

export default Shop