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
  let availableOnly = searchParams.get("availableOnly")

  useEffect(() => {
    let url = availableOnly == "true" ? ITEMS_URL : ITEMS_ALL_URL
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
  }, [])

  return (
    <div>
      <h1>Items</h1>
      <button className="btn btn-primary">
        <Link className="white-link" to={ITEMS_CREATE}>
          Create a new item
        </Link>
      </button>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : items && items.length ? (
          <div>
            {items.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  )
}

export default ItemListPage
