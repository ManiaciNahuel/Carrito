import { useCart } from '../hooks/useCart'
import '../styles/main.scss'

export function HomeProducts({ products }) {
    const { addToCart, cart, removeOne } = useCart()

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
                            <div>
                                <img className="Item-img" src={prod.image} alt='' />
                            </div>
                            <div className="Item-name">
                                {`$${prod.price}`}
                                <br />
                                {prod.name}
                            </div>
                            <div className="Item-footer">  
                                <button className="Item-btn" onClick={() => {

                                    
                                    addToCart(prod)}}
                                    > {
                                    alreadyInCart ? "Add another one" : "Add to cart"  }
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
