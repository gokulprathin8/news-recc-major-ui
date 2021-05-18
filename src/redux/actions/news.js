import newsrec from "../../apis/newsrec";
import {
    GET_NEWS
} from "./types";

export const fetchNews = (category) => async (dispatch) => {
    const response = await newsrec.get('/news/news/', {
        params: {
            'category': category
        }
    });

    dispatch({ type: GET_NEWS, payload: response.data })
}
