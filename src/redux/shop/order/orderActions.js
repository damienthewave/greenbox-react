import {
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAILURE,
} from "./constants"
import { ORDERS_CREATE_URL } from "../../../constants/api"
import axios from "axios"

export const placeOrder = (order) => {
  console.log("place order action")
  return (dispatch) => {
    dispatch(placeOrderRequest())
    console.log(order)
    axios
      .post(ORDERS_CREATE_URL, order)
      .then((response) => {
        console.log(response)
        dispatch(placeOrderSuccess(response.data))
      })
      .catch((error) => {
        console.log(error)
        dispatch(placeOrderFailure(error.message))
      })
  }
}

export const placeOrderRequest = () => {
  return {
    type: PLACE_ORDER_REQUEST,
  }
}

export const placeOrderSuccess = (order) => {
  return {
    type: PLACE_ORDER_SUCCESS,
    payload: order,
  }
}

export const placeOrderFailure = (error) => {
  return {
    type: PLACE_ORDER_FAILURE,
    payload: error,
  }
}
