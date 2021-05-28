import React from "react";
import Header from "./Header"
import Product from "./Product"

function Shop () {
  return(
    <>
    <Header />
    <div className="bg-cultured h-screen flex justify-center items-center ">
      <Product />
      <Product />

      <Product />

      <Product />

      <Product />

      <Product />


    </div>
    </>
  )
}

export default Shop