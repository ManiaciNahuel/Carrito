import { useCart } from '../hooks/useCart'
import '../styles/main.css'

export function HomeProducts({ products }) {
    const { addToCart, cart, removeFromCart } = useCart()

    const productInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <div className='Container'> 
            {products.slice(0, 10).map(prod => {
                const alreadyInCart = productInCart(prod)
                
                return (
                    <li key={prod.id}>
                        <div className="Item" >
                            <div className="Item-name">
                                {prod.name}
                            </div>
                            <div>
                                <img className="Item-img" src={prod.image} alt='' />
                                <br />
                                {`$${prod.price}`}                                                            
                            </div>
                            <div className="Item-footer">  
                                <button className="btn-detalle" onClick={() => {

                                    alreadyInCart ? removeFromCart(prod) :
                                    addToCart(prod)}}
                                    > {
                                    alreadyInCart ? "Already in car" : "Add to cart"  }
                                </button>                
                            </div>
                        </div> 
                    </li>
                )
            }
        )
        }
        </div>
    )
}
