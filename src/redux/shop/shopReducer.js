import { FETCH_ITEMS_FAILURE, FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS } from "./constants";

const initialState = {
    loading: false,
    shopItems: [],
    cartItems: [],
    error: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type){
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