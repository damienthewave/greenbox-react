import React from "react"
import CartItem from "./CartItem"

function CartList({ cartItems, delButton = true }) {
  return (
    <ul className="list-group">
      {cartItems.map((cartItem) => {
        return (
          <CartItem
            key={cartItem.item.id}
            item={cartItem.item}
            amount={cartItem.amount}
            delButton={delButton}
          />
        )
      })}
    </ul>
  )
}

export default CartList
