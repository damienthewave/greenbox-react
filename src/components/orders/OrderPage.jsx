import React, { useState, useEffect } from "react"
import OrderDetails from "./OrderDetails"
import axios from "axios"
import { getOrderByIdUrl } from "../../constants/api"
import PositionDetails from "./PositionDetails"
import { completeOrderByIdUrl } from "../../constants/api"

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

  function markOrderAsCompleted() {
    setLoading(true)
    axios
      .patch(completeOrderByIdUrl(order.id))
      .then((response) => {
        setOrder(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        setError(error)
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
        <div>
          <div className="row">
            <div className="col-7">
              <OrderDetails order={order} />
            </div>
            <div className="col">{renderPositions()}</div>
          </div>
          <br />
          <div className="container row">
            {!order.completed ? (
              <button
                className="btn btn-success"
                onClick={() => markOrderAsCompleted(order.id)}
              >
                Complete
              </button>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default OrderPage
