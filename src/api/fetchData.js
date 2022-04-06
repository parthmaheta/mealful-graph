import axios from "axios";

export async function fetchData(url,dispatch) {
    dispatch({ type: FETCH_DATA_REQUEST });
    try {
     const {data}=await axios.get(url);
     dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FETCH_DATA_FAILURE, payload: error });
    }
}