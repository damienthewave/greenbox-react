import React, { useState } from "react"
import axios from "axios"
import { itemToUnit } from "../../utils/itemUtils"
import { changeItemsAvailabilityByIdUrl } from "../../constants/api"

function ItemCard({ item }) {
  const [hookItem, setHookItem] = useState(item)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  function changeItemsAvailability() {
    setLoading(true)
    let url = changeItemsAvailabilityByIdUrl(hookItem.id, !hookItem.available)
    axios
      .patch(url)
      .then((response) => {
        console.log(response)
        setHookItem(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
        setError(error.message)
      })
  }

  let isAvailable = (
    <p className={"text-" + (hookItem.available ? "success" : "danger")}>
      {"This item is " + (hookItem.available ? "available" : "not available")}
    </p>
  )

  const changeAvailabilityButton = () => {
    let btnClass = "btn btn-" + (hookItem.available ? "danger" : "success")
    let text = hookItem.available ? "Make unavailable" : "Make available"
    return (
      <button className={btnClass} onClick={() => changeItemsAvailability()}>
        {text}
      </button>
    )
  }

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <div>${hookItem.price + " / " + itemToUnit(item)}</div>
            <div>{hookItem.description ? hookItem.description : <br />}</div>
            {isAvailable}
            {changeAvailabilityButton()}
          </div>
        </div>
      )}
    </div>
  )
}

export default ItemCard
