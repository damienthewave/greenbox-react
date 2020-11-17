import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { deleteItemFromCart } from "../../../redux/shop/shopActions"
import CartList from "./CartList"
import { calculateTotal } from "../../../utils/itemUtils"

function Cart({ cartItems }) {
  const renderCartInfo = () => {
    return cartItems && cartItems.length !== 0 ? (
      <div>
        <div>Total price: ${calculateTotal(cartItems)}</div>
        <Link to="/order/shipping">
          <button className="btn btn-primary">Proceed</button>
        </Link>
      </div>
    ) : (
      <p>You have no items in the cart. Add some!</p>
    )
  }

  return (
    <div>
      <h3>Cart</h3>
      <CartList cartItems={cartItems} />
      <div className="mt-3">{renderCartInfo()}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.shopItems.cartItems,
  }
}

const mapDispatchToProps = {
  deleteItemFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
