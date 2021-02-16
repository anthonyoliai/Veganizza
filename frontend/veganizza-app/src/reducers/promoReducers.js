import {
  PROMO_REQUEST,
  PROMO_SUCCESS,
  PROMO_FAIL,
} from '../constants/promoConstants'

export const promoReducer = (state = { promos: [] }, action) => {
  switch (action.type) {
    case PROMO_REQUEST:
      return { loading: true }
    case PROMO_SUCCESS:
      return { loading: false, promos: action.payload }
    case PROMO_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
