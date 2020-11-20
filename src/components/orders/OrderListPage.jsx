import React, { useState, useEffect } from "react"
import axios from "axios"
import OrderDetails from "./OrderDetails"
import { ORDERS_ALL_URL } from "../../constants/api"

function OrderListPage() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    axios.get(ORDERS_ALL_URL).then((orders) => {
      setOrders(orders.data)
    })
  }, [])

  const ordersToDetail = () =>
    orders.map((order) => {
      return <OrderDetails key={order.id} order={order} link={true} />
    })

  return (
    <div>
      <h1 className="mt-3">Orders</h1>
      <div>{orders ? ordersToDetail() : <div>Loading...</div>}</div>
    </div>
  )
}

export default OrderListPage
