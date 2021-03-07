import {
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_RESET,
  ORDER_GET_REQUEST,
  ORDER_GET_SUCCESS,
  ORDER_GET_FAIL,
  ORDER_ANIMATION_REQUEST,
  ORDER_ANIMATION_SUCCESS,
  ORDER_ANIMATION_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
} from '../constants/orderConstants'
import axios from 'axios'
export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()
    console.log('The user info equals')
    console.log(userInfo)
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    console.log(order)
    const { data } = await axios.post(`/api/orders`, order, config)

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const resetOrder = () => (dispatch) => {
  console.log('RESETTING ORDER')
  dispatch({
    type: ORDER_CREATE_RESET,
  })
}

export const getOrderById = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_GET_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/orders/${id}`, config)
    console.log('Data')
    console.log(data)

    dispatch({
      type: ORDER_GET_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_LIST_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get('/api/orders/myorders', config)
    console.log('Data')
    console.log(data)

    dispatch({
      type: ORDER_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getAnimations = (animationName) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_ANIMATION_REQUEST })

    const { data } = await axios.get(`/animations/${animationName}`)
    dispatch({ type: ORDER_ANIMATION_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ORDER_ANIMATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
