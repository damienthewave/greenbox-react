import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import OrderDetails from "./OrderDetails"
import { ORDERS_ALL_URL, ORDERS_URL } from "../../constants/api"

function OrderListPage({ history }) {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  let searchParams = new URLSearchParams(history.location.search)
  let all = JSON.parse(searchParams.get("all"))

  useEffect(() => {
    let url = all ? ORDERS_ALL_URL : ORDERS_URL
    axios
      .get(url)
      .then((orders) => {
        setOrders(orders.data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [history.location])

  const ordersToDetail = orders.map((order) => {
    return <OrderDetails key={order.id} order={order} link={true} />
  })

  const renderFilterLink = () => {
    let link = "?all=" + !all
    let text = all ? "Not completed" : "All orders"
    return (
      <Link className="white-link" to={link}>
        <button className="btn btn-primary">{text}</button>
      </Link>
    )
  }

  return (
    <div>
      <h1>Orders</h1>
      {renderFilterLink()}
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
