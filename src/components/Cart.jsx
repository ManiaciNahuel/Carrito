import { useCart } from "../hooks/useCart"

function CartItem({ id, price, name, image, addToCart, quantity }) {
    return (
        <li>
            <h2>{name}</h2>
            <img src={image} alt="Imagen" />
            <p>${price}</p>
            <button onClick={addToCart}>
                Cantidad: {quantity}
            </button>
        </li>
    )    


}

export function Cart() {
    const {cart, clearCart, addToCart} = useCart()

    return (
        <>
            <label className='cart-button' htmlFor="cartCheckboxId">
                <img src={require("../media/shopping-cart.png")}  alt="" />
            </label>
            <input id="cartCheckboxId" type='checkbox' hidden />
            <aside className='cart'>
                <ul>
                    {cart.map(prod => (
                        <CartItem
                            key={prod.id}
                            addToCart={()=> addToCart(prod)}
                            {...prod} />
                    ))}
                </ul>
                <button onClick={clearCart}>
                    Clear
                </button>
            </aside>
        </>
    )

}