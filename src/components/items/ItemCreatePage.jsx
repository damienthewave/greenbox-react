import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import axios from "axios"
import { COLLECTION_TYPES } from "../../utils/itemUtils"
import { ITEMS_CREATE_URL } from "../../constants/api"
import { getRouteForItem } from "../../constants/routes"
import ItemCard from "./ItemCard"

function ItemCreatePage() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [collectionType, setCollectionType] = useState(COLLECTION_TYPES[0])
  const [description, setDescription] = useState("")

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [item, setItem] = useState()

  function prepareItem() {
    return {
      name,
      price,
      collectionType,
      description,
    }
  }

  function createItem(item) {
    setLoading(true)
    axios
      .post(ITEMS_CREATE_URL, item)
      .then((response) => {
        setItem(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }

  const form = (
    <form className="mt-3">
      <div className="form-group">
        <label htmlFor="itemName">Item name: </label>
        <input
          className="form-control input-lg"
          id="itemName"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="itemPrice" type="number">
          Item price:
        </label>
        <input
          className="form-control input-lg"
          id="itemPrice"
          placeholder="Price"
          onChange={(event) => setPrice(event.target.value)}
        />
        <select
          onChange={(event) => setCollectionType(event.target.value)}
          className="browser-default custom-select"
          htmlFor="collectionType"
        >
          {COLLECTION_TYPES.map((type, key) => (
            <option value={COLLECTION_TYPES[key]}>{type}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="itemDescription">Optional description:</label>
        <input
          className="form-control input-lg"
          id="itemDescription"
          placeholder="Description"
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => {
          const item = prepareItem()
          createItem(item)
        }}
      >
        Create a new item
      </button>
    </form>
  )

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : item ? (
        <div>
          <p className="text-success">Item has been successfully created!</p>
          <ItemCard item={item} />
        </div>
      ) : (
        <div>
          <h1>Create a new item</h1>
          {form}
        </div>
      )}
    </div>
  )
}

export default ItemCreatePage
