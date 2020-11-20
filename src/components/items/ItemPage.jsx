import React, { useState, useEffect } from "react"
import axios from "axios"
import { getItemByIdUrl } from "../../constants/api"
import ItemCard from "./ItemCard"

function ItemPage({ match }) {
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const id = match.params.id
    const url = getItemByIdUrl(id)
    axios
      .get(url)
      .then((response) => {
        setItem(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : item ? (
        <ItemCard item={item} />
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default ItemPage
