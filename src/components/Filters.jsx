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

    const handleColor = (event) => {
        setFilters(prevState => ({
            ...prevState, 
            color: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Price</label>
                <input type="range" id="price" min='300' max='750' onChange={handleMinPrice} value={filters.minPrice}/>
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select id="category" onChange={handleCategory}>
                    <option value="all">All</option>
                    <option value="Armless">Armless</option>
                    <option value="Armchair">Armchair</option>
                </select>
            </div>
            <div>
                <label htmlFor="category">Color</label>
                <select id="color" onChange={handleColor}>
                    <option value="all">All</option>
                    <option value="red">Red</option>
                    <option value="yellow">Yellow</option>
                    <option value="purple">Purple</option>
                    <option value="sand">Sand</option>
                    <option value="grey">Grey</option>
                </select>
            </div>
        </section>
        
    )
}