import { SHOW__HIDE__CART, ADD__TO__CART, REMOVE__ITEM, INCREMENT, DECREMENT } from '../Types';

const cartReducer = (state, action) => {
    switch (action.type) {
        case SHOW__HIDE__CART: {
            return {
                ...state, 
                showCart: !state.showCart,
            };
        }
        case ADD__TO__CART: 
            if (!state.cartItems.find(item => item._id === action.payload._id)){
            return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload],
                    // quantity: 1
                }
        }
        case REMOVE__ITEM: {
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item._id !== action.payload)
            }
        }
        case INCREMENT: {
            
            state.cartItems[state.cartItems.findIndex(item => item._id === action.payload._id)].quantity ++
            return {
                ...state,
                cartItems: [...state.cartItems]
            }
        }
        case DECREMENT: {
            state.cartItems[state.cartItems.findIndex(item => item._id === action.payload._id)].quantity--
            return {
                ...state,
                cartItems: [...state.cartItems]
            }
        }

        default:
        return state
    }
} 

export default cartReducer;
