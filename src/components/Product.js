import React from "react";

function Product( {productName, productImage }) {

  return(
    <div className="h-96 w-72 m-10 mt-20 p-5 border-solid rounded border border-prussian-blue divide-y-2 divide-claret divide-dashed text-center">
      <div className="m-1">
        {productName}
      </div>
      <div className="h-72">
        {productImage}
      </div>
      <div>
      <button className="border-2 border-solid border-prussian-blue rounded m-5 px-1 hover:bg-gamboge">Add To Cart</button>
      </div>
    </div>
  )
}

export default Product