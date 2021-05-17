import newsrec from "../../apis/newsrec";
import {FETCH_COUNTS} from "./types";

export const fetchCounts = () => async (dispatch) => {
    const response = await newsrec.get('/counts/');

    dispatch({ type: FETCH_COUNTS, payload: response.data });
}

export const postCounts = (formValues) => async  (dispatch) => {
    await newsrec.post('/counts/', formValues);
}
