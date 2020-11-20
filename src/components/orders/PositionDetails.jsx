import React from "react"
import { itemToUnit } from "../../utils/itemUtils"

function PositionDetails({ position }) {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">{position.item.name}</h5>
        Amount: <span>{position.amount + " " + itemToUnit(position.item)}</span>
        <div>Subtotal price: ${position.subtotalPrice}</div>
      </div>
    </div>
  )
}

export default PositionDetails
