import newsrec from "../../apis/newsrec";
import {
    GET_NEWS
} from "./types";

export const fetchNews = () => async (dispatch) => {
    const response = await newsrec.get('/news/news/');

    dispatch({ type: GET_NEWS, payload: response.data })
}
