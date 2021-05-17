import axios from "axios";
import {
    GET_LATEST_NEWS
} from "./types";

export const fetchLatestNews = () => async (dispatch) => {
    const response = await axios.get('https://newsdata.io/api/1/news', {
        params: {
            apikey: 'pub_174d5ea2f4faf7377556033037e3a84e037',
            country: 'in',
            language: 'en'
        }
    });

    dispatch({ type: GET_LATEST_NEWS, payload: response.data })
}
