import {
  PLACE_ORDER_FAILURE,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
} from "./constants"

const initialState = {
  loading: false,
  error: "",
  success: false,
  order: {},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case PLACE_ORDER_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      }
    case PLACE_ORDER_FAILURE:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default reducer
