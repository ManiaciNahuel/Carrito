import { createContext, useState } from "react";


export const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = product => { 

        const productInCart = cart.findIndex(
            item => item.id === product.id
        )

        if (productInCart >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCart].quantity += 1
            return setCart(newCart)
        }

        setCart(prevState => ([
            ...prevState, 
            {
                ...product,
                quantity: 1
            }
        ]))
    }

    const removeFromCart = product => {/* 
        setCart(prevState => prevState.filter(item => item.id == !product.id)) */
        const newCart = [...cart];
        let index = newCart.findIndex((product) => product.id === product.id);
        
        cart[index].amount > 1 ?
            cart[index].amount = (cart[index].amount) - 1 :
            newCart.splice(index,1);
        setCart([...newCart])
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart, 
            addToCart,
            removeFromCart,
            clearCart
        }}>
        
            {children}
        </CartContext.Provider>
    )
}