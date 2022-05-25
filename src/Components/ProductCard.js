import { useContext } from 'react';
import './ProductCard.css';
import CartContext from '../context/cart/CartContext';

export const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext)
    return (
        <div className="productCard__wrapper">
            <img className="productCard__img" src={product.image} alt="bag"/>
            <h4>{product.name}</h4>
            <div className="productCard__price">
                <p>${product.price}</p>
            </div>
            <button className="ProductCard__button" 
            onClick={ ()=> addToCart(product)}>ADD TO CART</button>
        </div>
    )
}

export default ProductCard;
