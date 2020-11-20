import React, { useState, useEffect } from "react"
import axios from "axios"
import OrderDetails from "./OrderDetails"
import { ORDERS_ALL_URL } from "../../constants/api"

function OrderListPage() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    axios
      .get(ORDERS_ALL_URL)
      .then((orders) => {
        setOrders(orders.data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  const ordersToDetail = orders.map((order) => {
    return <OrderDetails key={order.id} order={order} link={true} />
  })

  return (
    <div>
      <h1>Orders</h1>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : orders ? (
          <div>{ordersToDetail}</div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default OrderListPage
