import { useContext } from "react"
import { CartContext } from "../context/cart"


export const useCart = () => {
    const context = useContext(CartContext)

    if (context === undefined) {
        throw new Error('useCart solo puede ser usado dentro del CartProvider')
    }

    return context
}