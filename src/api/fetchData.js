import axios from "axios"
import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "../store/actions/constants"

export async function fetchData(url, dispatch) {
  dispatch({ type: FETCH_DATA_REQUEST })
  try {
    const { data } = await axios.get(url)
    dispatch({ type: FETCH_DATA_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: FETCH_DATA_FAILURE, payload: error })
  }
}
