import {
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_FAIL,
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
