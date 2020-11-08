import { combineReducers } from "redux";
import shopItemsReducer from './shop/shopReducer'

const rootReducer = combineReducers({
    shopItems: shopItemsReducer,
})

export default rootReducer