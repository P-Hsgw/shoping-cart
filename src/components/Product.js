import React from "react";

function Product() {

  return(
    <div className="h-96 w-72 m-10 p-5 border-solid rounded border border-prussian-blue divide-y-2 divide-claret divide-dashed text-center">
      <div className="m-1">
        PRODUCT NAME
      </div>
      <div className="h-72">
        IMAGE
      </div>
      <div>
      <button className="border-2 border-solid border-prussian-blue rounded m-2 px-1 hover:bg-gamboge">Add to cart</button>
      </div>
    </div>
  )
}

export default Product