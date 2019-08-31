import CartActionType from './cart.type';
import { addItemToCart, removeItem, decreaseItem } from './cart.utils';


const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionType.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionType.DECREASE_ITEM:
                return {
                    ...state,
                    cartItems: decreaseItem(state.cartItems, action.payload)
                }
        case CartActionType.REMOVE_ITEM:
                return {
                    ...state,
                    cartItems: removeItem(state.cartItems, action.payload)
                }
        case CartActionType.CLEAR_CART:
                return {
                    ...state,
                    cartItems: []
                }
        default:
            return state;
    }
}

export default cartReducer;