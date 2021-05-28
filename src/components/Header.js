import React from "react";
import { Link } from "react-router-dom"

function Header () {
  return(
    <div className="justify-end items-center h-12 flex bg-prussian-blue absolute w-screen ">
      <p className="text-cultured mr-auto m-5 text-4xl">
        STORE <span className="text-gamboge">DEMO</span>
      </p>
      <ul>
        <li className="inline-block m-5 text-cultured text-2xl">
          <Link to="/">Home</Link>
        </li>
        <li className="inline-block m-5 text-cultured text-2xl">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="inline-block m-5 text-gamboge text-2xl ">
          CART
        </li>
      </ul>
    </div>
  )
}

export default Header