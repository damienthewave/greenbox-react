import React from "react"
import { ITEMS, ORDERS, SHOP, SUMMARY } from "../constants/routes"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark leading-color">
      <a className="navbar-brand" href="/">
        <div className="">Greenbox</div>
      </a>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href={SHOP}>
            Order Now!
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={ITEMS}>
            Items
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={ORDERS}>
            Orders
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={SUMMARY}>
            Summary
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
