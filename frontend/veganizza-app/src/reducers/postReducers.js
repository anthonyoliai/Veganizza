import {
  GET_POST_FAIL,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  POSTS_FAIL,
  POSTS_REQUEST,
  POSTS_SUCCESS,
} from '../constants/postConstants'

export const postReducer = (state = { promos: [] }, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return { loading: true }
    case POSTS_SUCCESS:
      return { loading: false, posts: action.payload }
    case POSTS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const getPostReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POST_REQUEST:
      return { loading: true }
    case GET_POST_SUCCESS:
      return { loading: false, post: action.payload }
    case GET_POST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
