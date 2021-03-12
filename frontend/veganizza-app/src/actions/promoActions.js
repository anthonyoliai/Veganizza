import {
  PROMO_FAIL,
  PROMO_REQUEST,
  PROMO_SUCCESS,
} from '../constants/promoConstants'

import axios from 'axios'

export const listPromos = () => async (dispatch) => {
  try {
    dispatch({ type: PROMO_REQUEST })

    const { data } = await axios.get('/api/promos')
    dispatch({ type: PROMO_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: PROMO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
