import axios from "axios"
import { useEffect, useState, useContext } from "react"

export default function useAxios(url, method = "get", body = null) {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  // Get token from context
  // const { accessToken, setAccessToken } = useContext(TokenContext);
  useEffect(() => {
    if (!url) return

    const request = method === "get" ? axios.get(url) : method === "post" ? axios.post(url, body) : method === "put" ? axios.put(url, body) : null

    if (!request) return

    request.then((response) => {
      if (response.status >= 200 && response.status < 300) {
        setData(response.data)
        setLoading(false)
      } else {
        setError(response.status)
      }
    })
  }, [url, method, body])

  const refreshData = () => {
    setLoading(true)
    setError(null)

    const request = method === "get" ? axios.get(url) : method === "post" ? axios.post(url, body) : method === "put" ? axios.put(url, body) : null

    if (!request) return

    request.then((response) => {
      if (response.status >= 200 && response.status < 300) {
        setData(response.data)
        setLoading(false)
      } else {
        setError(response.status)
      }
    })
  }

  return { data, loading, error, refreshData }
}
