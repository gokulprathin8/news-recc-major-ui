import newsrec from "../../apis/newsrec";
import {
    GET_CATEGORY
} from "./types";

export const fetchCategory = () => async (dispatch) => {
    const response = await newsrec.get('/news/category/');

    dispatch({ type: GET_CATEGORY, payload: response.data })
}
