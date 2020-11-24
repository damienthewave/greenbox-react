import React, { useEffect, useState } from "react"
import axios from "axios"
import { SESSION_SUMMARY_URL } from "../../constants/api"
import SummaryItem from "./SummaryItem"

function SummaryPage() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [summary, setSummary] = useState([])

  useEffect(() => {
    axios
      .get(SESSION_SUMMARY_URL)
      .then((response) => {
        setSummary(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <h1>Session Summary</h1>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : summary && summary.collectedItems.length !== 0 ? (
          <div>
            {summary.collectedItems.map((summaryItem) => (
              <SummaryItem
                key={summaryItem.item.id}
                summaryItem={summaryItem}
              />
            ))}
            <div className="mt-3">Total cost: ${summary.totalPrice}</div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default SummaryPage
