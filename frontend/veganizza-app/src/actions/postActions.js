import {
  GET_POST_FAIL,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  POSTS_FAIL,
  POSTS_REQUEST,
  POSTS_SUCCESS,
} from '../constants/postConstants'

import axios from 'axios'

export const listPosts = () => async (dispatch) => {
  try {
    dispatch({ type: POSTS_REQUEST })

    const { data } = await axios.get('/api/posts')
    dispatch({ type: POSTS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: POSTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_POST_REQUEST })

    const { data } = await axios.get(`/api/posts/${id}`)
    dispatch({ type: GET_POST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: GET_POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
