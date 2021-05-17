import newsrec from "../../apis/newsrec";
import {FETCH_COUNTS} from "./types";

export const fetchCounts = () => async (dispatch) => {
    const response = await newsrec.get('/news/counts/');

    dispatch({ type: FETCH_COUNTS, payload: response.data });
}

export const postCounts = (formValues, auth) => async  (dispatch) => {
    await newsrec.post('/news/counts/', {"category_name": formValues}, {
        headers: {
            'Authorization': 'Bearer ' + auth
        }
    });
}
