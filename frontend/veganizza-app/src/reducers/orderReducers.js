import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_RESET,
  ORDER_GET_REQUEST,
  ORDER_GET_SUCCESS,
  ORDER_GET_FAIL,
  ORDER_ANIMATION_REQUEST,
  ORDER_ANIMATION_SUCCESS,
  ORDER_ANIMATION_FAIL,
} from '../constants/orderConstants'

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true }
    case ORDER_CREATE_SUCCESS:
      return { loading: false, success: true, order: action.payload }
    case ORDER_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case ORDER_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const orderGetReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_GET_REQUEST:
      return { loading: true }
    case ORDER_GET_SUCCESS:
      return { loading: false, order: action.payload }
    case ORDER_GET_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const orderAnimationReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_ANIMATION_REQUEST:
      return { loading: true }
    case ORDER_ANIMATION_SUCCESS:
      return { loading: false, animation: action.payload }
    case ORDER_ANIMATION_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
