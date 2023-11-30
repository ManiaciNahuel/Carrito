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

        /*
        setCart(prevState => prevState.filter(item => item.id == !product.id)) */
    const removeFromCart = product => {
        const newCart = [...cart];
        let index = newCart.findIndex((producto) => product.id === producto.id);
        
        
            if (confirmDelete()) {
            newCart.splice(index, 1);}
        
        setCart([...newCart]);
    }
    
    const confirmDelete = () => window.confirm("Are you sure you want to delete this product?");

    const confirmClearCart = () => window.confirm("Are you sure you want to clear your cart?");

    const removeOne = product => { 
        const newCart = [...cart]
        let index = newCart.findIndex((producto) => product.id === producto.id);

        if (newCart[index].quantity > 1) {
            newCart[index].quantity -= 1
        } else {
            if (confirmDelete()) {
                newCart.splice(index, 1);
            }
        }

        setCart(newCart)
    }


    const clearCart = () => {
        if (confirmClearCart()) {
            setCart([])
        }
    }

    return (
        <CartContext.Provider value={{
            cart, 
            addToCart,
            removeFromCart,
            removeOne,
            clearCart
        }}>
        
            {children}
        </CartContext.Provider>
    )
}