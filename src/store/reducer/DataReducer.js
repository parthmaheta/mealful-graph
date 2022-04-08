import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
} from "./../actions/constants"

const initialState = {
  fetching: true,
  data: [],
  error: null,
}

export function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, fetching: true }
    case FETCH_DATA_SUCCESS:
      return { data: action.payload, fetching: false, error: null }
    case FETCH_DATA_FAILURE:
      return { ...state, fetching: false, error: action.payload }

    default:
      return state
  }
}
