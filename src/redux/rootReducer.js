import { combineReducers } from "redux"
import shopItemsReducer from "./shop/shopReducer"
import orderReducer from "./shop/order/orderReducer"

const rootReducer = combineReducers({
  shopItems: shopItemsReducer,
  orderData: orderReducer,
})

export default rootReducer
