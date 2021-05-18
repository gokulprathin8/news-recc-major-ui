import newsrec from "../../apis/newsrec";
import {
    GET_LATEST_NEWS
} from "./types";

export const fetchLatestNews = () => async (dispatch) => {
    const response = await newsrec.get('/news/getLatestNews/');

    dispatch({ type: GET_LATEST_NEWS, payload: response.data })
}
