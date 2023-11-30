import { useCart } from "../hooks/useCart"
import { FaBeer, FaPlusCircle, FaMinusCircle, FaTrash, FaShoppingCart } from "react-icons/fa";


function CartItem({
    id, price, name, image, addToCart, quantity, removeOne, removeFromCart
    }) {
    return (
        <li>
            <h2>{name}</h2>
            <img src={image} alt="Imagen" />
            <p>${price}
            <br /> Cantidad: {quantity}
            </p>
            <div className="cart-btns">
                <button onClick={removeOne}> <FaMinusCircle /> </button>
                <button onClick={addToCart}> <FaPlusCircle /> </button>
                <button onClick={removeFromCart}> <FaTrash /> </button>
            </div>

        </li>
    )    


}

export function Cart() {
    const {cart, clearCart, addToCart, removeOne, removeFromCart} = useCart()

    return (
        <>  
            <label className='cart-icon' htmlFor="cartCheckboxId">
                <h2>
                    <FaShoppingCart />
                </h2>
            </label>
            <input id="cartCheckboxId" type='checkbox' hidden />
            <aside className='cart'>
                <ul>
                    {cart.map(prod => (
                        
                            <CartItem
                                key={prod.id}
                                addToCart={() => addToCart(prod)}
                                removeOne={() => removeOne(prod)}
                                removeFromCart={()=> removeFromCart(prod)}
                                {...prod} />
                       
                    ))}
                </ul>
                 <h3>
                    Lets go for a <FaBeer />?
                </h3>
                
                <button /* className={darkMode ? 'container container--dark' : 'container container--light'
      } */ onClick={clearCart}>
                    Clear
                </button>
            </aside>
        </>
    )

}