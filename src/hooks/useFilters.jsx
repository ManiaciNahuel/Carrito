import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters () {

  const {filters, setFilters} = useContext(FiltersContext)
  
  const filterProducts = (productList) => {
    return productList.filter(prod => {
      return (
        prod.price >= filters.minPrice && (
          filters.category === 'all' || prod.category === filters.category
        ) && (
          filters.color === 'all' || prod.color === filters.color
        )
      )
    })
  }
  return { filters, filterProducts, setFilters }
}