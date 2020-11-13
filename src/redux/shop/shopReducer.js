import { FETCH_ITEMS_FAILURE, FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS, ADD_ITEM_TO_CART, DELETE_ITEM_FROM_CART } from "./constants";

const initialState = {
    loading: false,
    shopItems: [],
    cartItems: [],
    error: "",
};

const reducer = (state = initialState, action) => {
    console.log(action)
    const { cartItems, shopItems } = state
    switch (action.type){
        case ADD_ITEM_TO_CART:
            var cartItem = {
                item: action.item,
                amount: action.amount
            }
            return{
                ...state,
                cartItems: [...cartItems, cartItem],
                shopItems: shopItems.filter(item => item.id!==action.item.id)
            }
        case DELETE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: cartItems.filter(cartItem => cartItem.item.id !== action.item.id),
                shopItems: [...shopItems, action.item]
            }
        case FETCH_ITEMS_REQUEST:
            return{
                ...state,
                loading: true,
                shopItems: []
            }
        case FETCH_ITEMS_SUCCESS:
            return{
                ...state,
                loading: false,
                shopItems: action.payload
            }
        case FETCH_ITEMS_FAILURE:
            return{
                ...state,
                loading: false,
                shopItems: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer