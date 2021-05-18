import newsrec from "../../apis/newsrec";
import {
    TRENDING_NEWS
} from "./types";

export const fetchTrendingNews = () => async (dispatch) => {
    const response = await newsrec.get('/news/trending/',
        );

    dispatch({ type: TRENDING_NEWS, payload: response.data })
}
