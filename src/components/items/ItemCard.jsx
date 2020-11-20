import React from "react"
import { Link } from "react-router-dom"
import { itemToUnit } from "../../utils/itemUtils"
import { getRouteForItem } from "../../constants/routes"

function ItemCard({ item, link = false }) {
  let title = <h5 className="card-title">{item.name}</h5>
  let header = link ? <Link to={getRouteForItem(item.id)}>{title}</Link> : title

  return (
    <div className="card mt-3">
      <div className="card-body">
        <div>{header}</div>
        <div>${item.price + " / " + itemToUnit(item)}</div>
        <div>{item.description ? item.description : <br />}</div>
        <p className={"text-" + (item.available ? "success" : "danger")}>
          {"This item is " + (item.available ? "available" : "not available")}
        </p>
      </div>
    </div>
  )
}

export default ItemCard
