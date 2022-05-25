import { children, useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW__HIDE__CART, ADD__TO__CART, REMOVE__ITEM, INCREMENT, DECREMENT} from "../Types";

const CartState = ({ children }) => {
    const initialState = {
        showCart: false,
        cartItems: []
    };

    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCart = item => {
        dispatch({ type: ADD__TO__CART, payload: item })
    }

    const showHideCart = () => {
        dispatch({ type: SHOW__HIDE__CART })
    }

    const removeItem = id => {
        dispatch({ type: REMOVE__ITEM, payload: id })
    }

    const increment = payload => {
        dispatch({ type: INCREMENT, payload})
    } 

    const decrement = (id) => {
        dispatch({ type: DECREMENT, payload: id })
    }

    return (
        
        <CartContext.Provider value={{
            showCart: state.showCart,
            cartItems: state.cartItems,
            addToCart,
            showHideCart,
            removeItem,
            increment,
            decrement,
        }}>{ children }</CartContext.Provider>

    )
}

export default CartState;