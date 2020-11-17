import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  ADD_ITEM_TO_CART,
  DELETE_ITEM_FROM_CART,
} from "./constants"
import { ITEMS_URL } from "../../constants/api"
import axios from "axios"

export const addItemToCart = (item, amount) => {
  const action = {
    type: ADD_ITEM_TO_CART,
    item,
    amount: +amount,
  }
  return action
}

export const deleteItemFromCart = (item) => {
  const action = {
    type: DELETE_ITEM_FROM_CART,
    item,
  }
  return action
}

export const fetchItems = () => {
  return (dispatch) => {
    dispatch(fetchItemsRequest())
    axios
      .get(ITEMS_URL)
      .then((response) => {
        dispatch(fetchItemsSuccess(response.data))
      })
      .catch((error) => {
        dispatch(fetchItemsFailure(error.message))
      })
  }
}

export const fetchItemsRequest = () => {
  return {
    type: FETCH_ITEMS_REQUEST,
  }
}

export const fetchItemsSuccess = (items) => {
  return {
    type: FETCH_ITEMS_SUCCESS,
    payload: items,
  }
}

export const fetchItemsFailure = (error) => {
  return {
    type: FETCH_ITEMS_FAILURE,
    payload: error,
  }
}
