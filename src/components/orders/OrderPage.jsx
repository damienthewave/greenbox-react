import React, { useState, useEffect } from "react"
import OrderDetails from "./OrderDetails"
import axios from "axios"
import { getOrderByIdUrl } from "../../constants/api"
import PositionDetails from "./PositionDetails"

function OrderPage({ match }) {
  const [order, setOrder] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    fetchOrder()
  }, [])

  function fetchOrder() {
    const id = match.params.id
    const url = getOrderByIdUrl(id)
    axios
      .get(url)
      .then((response) => {
        setOrder(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
      })
  }

  const renderPositions = () => {
    return order.positions.map((position) => {
      return <PositionDetails key={position.item.id} position={position} />
    })
  }

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="row">
          <div className="col-7">
            <OrderDetails order={order} />
          </div>
          <div className="col">{renderPositions()}</div>
        </div>
      )}
    </div>
  )
}

export default OrderPage
