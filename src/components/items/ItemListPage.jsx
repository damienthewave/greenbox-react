import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { ITEMS_URL, ITEMS_ALL_URL } from "../../constants/api"
import ItemCard from "./ItemCard"
import { ITEMS_CREATE } from "../../constants/routes"

function ItemListPage({ history }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  let searchParams = new URLSearchParams(history.location.search)
  let all = JSON.parse(searchParams.get("all"))

  useEffect(() => {
    let url = all ? ITEMS_ALL_URL : ITEMS_URL
    console.log(url)
    axios
      .get(url)
      .then((response) => {
        setItems(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [history.location])

  const renderFilterLink = () => {
    let link = "?all=" + !all
    let text = all ? "Only available" : "All items"
    return (
      <Link className="white-link" to={link}>
        <button className="btn btn-primary">{text}</button>
      </Link>
    )
  }

  return (
    <div>
      <h1>Items</h1>
      <div>
        <Link className="white-link" to={ITEMS_CREATE}>
          <button className="btn btn-primary">Add an item</button>
        </Link>
        <p></p>
        <div>{renderFilterLink()}</div>
        <p></p>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : items && items.length ? (
          <div>
            <div>
              {items.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ) : (
          <p>No items</p>
        )}
      </div>
    </div>
  )
}

export default ItemListPage
