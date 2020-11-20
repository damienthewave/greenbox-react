import React from "react"
import { Link } from "react-router-dom"

function OrderDetails({ order, link = false }) {
  console.log(order)

  let dateCreated = new Date(order.createdOn)

  const renderTitle = () => {
    let title = <h3 className="card-title">{order.personName}</h3>
    return link ? (
      <Link to={"/orders/" + order.id}>{title}</Link>
    ) : (
      <div>{title}</div>
    )
  }

  const renderCompletedInfo = () => {
    return order.completed ? (
      <div className="text-success">Completed</div>
    ) : (
      <div className="text-danger">Not completed</div>
    )
  }

  return (
    <div className="card mt-3">
      <div className="card-body">
        <div className="card-title">{renderTitle()}</div>
        <div>Order ID: {order.id}</div>
        <div>Phone number: {order.phoneNumber}</div>
        <div>Address: {order.address}</div>
        <div>Total price: ${order.totalPrice}</div>
        <div>Created on: {dateCreated.toLocaleString()}</div>
        <div>{renderCompletedInfo()}</div>
      </div>
    </div>
  )
}

export default OrderDetails
