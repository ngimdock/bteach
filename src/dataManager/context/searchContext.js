import { createContext } from "react";

const searchContext = createContext({
  keyword: "",
  filters: [],
  addKeyword: (key) => {},
  addFilters: (filters) => {}
})

export default searchContext