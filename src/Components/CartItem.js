import { useContext } from "react";
import './CartItem.css';
import CartContext from "../context/cart/CartContext";

const CartItem = ({item}) => {
    const { removeItem, increment, decrement } = useContext(CartContext);

    return <li className="CartItem__item">
        <img src={item.image} alt="bag" />
        <div>
            {item.name} <span>$</span>{item.price}
        </div>
        <span>Qty: {item.quantity}</span>
        <button className="CartItem__icon"><i class="fa fa-plus" onClick={() => increment(item)} aria-hidden="true"></i></button>
        <button className="CartItem__icon"><i class="fa fa-minus" onClick={() => decrement(item)} aria-hidden="true"></i></button>
        <button className="CartItem__button" onClick={()=> removeItem(item._id )}>
            <i className="fa fa-trash"></i>
        </button>
    </li>;
};

export default CartItem;