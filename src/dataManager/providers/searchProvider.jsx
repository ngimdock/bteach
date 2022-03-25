import { useState } from "react"
import searchContext from "../context/searchContext"

const SearchProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("")
  const [filters, setFilters] = useState([])

  // Some actions
  const addKeyword = (key) => {
    setFilters([])
    console.log({key})
    setKeyword(key)
  }

  const addFilters = (filters) => {
    setKeyword("")

    setFilters(filters)
  }

  const searchContextValue = {
    keyword,
    filters,
    addKeyword,
    addFilters
  }

  return (
    <searchContext.Provider value={searchContextValue}>
      { children }
    </searchContext.Provider>
  )
}

export default SearchProvider