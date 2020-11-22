import React from "react"
import { itemToUnit } from "../../utils/itemUtils"

function ItemCard({ item }) {
  let isAvailable = (
    <p className={"text-" + (item.available ? "success" : "danger")}>
      {"This item is " + (item.available ? "available" : "not available")}
    </p>
  )

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <div>${item.price + " / " + itemToUnit(item)}</div>
        <div>{item.description ? item.description : <br />}</div>
        {isAvailable}
      </div>
    </div>
  )
}

export default ItemCard
