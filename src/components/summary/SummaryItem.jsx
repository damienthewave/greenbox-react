import React from "react"
import { itemToUnit } from "../../utils/itemUtils"

function SummaryItem({ summaryItem }) {
  const { amount, price, item } = summaryItem
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <div>Price: ${item.price}</div>
        <div>Amount: {amount + " " + itemToUnit(item)} </div>
        <div>Total price: ${price}</div>
      </div>
    </div>
  )
}

export default SummaryItem
