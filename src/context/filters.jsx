import { createContext, useState } from "react";


export const FiltersContext = createContext()

export function FiltersProvider({ children }) {
    const [ filters, setFilters] = useState({
    category: 'all', //Categoria default
    minPrice: 350
  })

    return (
        <FiltersContext.Provider value={{
            filters, setFilters
        }}
        >
            {children}
        </FiltersContext.Provider>
    )

} 