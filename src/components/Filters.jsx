/* import { useState } from "react" */
import { useFilters } from "../hooks/useFilters"

export function Filters() {
    
    const { filters, setFilters } = useFilters()
    const handleMinPrice = (event) => {

        setFilters(prevState => ({
            ...prevState, 
            minPrice: event.target.value
        }))
    }

    const handleCategory = (event) => {
        setFilters(prevState => ({
            ...prevState, 
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Price</label>
                <input type="range" id="price" min='350' max='650' onChange={handleMinPrice} value={filters.minPrice}/>
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select id="category" onChange={handleCategory}>
                    <option value="all">All</option>
                    <option value="CD">CD</option>
                    <option value="Vinyl">Vinyl</option>
                </select>
            </div>
        </section>
        
    )
}