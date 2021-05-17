import newsrec from "../../apis/newsrec";
import {MAKE_PREDICTIONS} from "./types";

export const predict = (auth) => async (dispatch) => {
    console.log(auth, 'auth');
    const response = await newsrec.get('/news/aggrigate/', {
        headers: {
            'Authorization': 'Bearer ' + auth
        }
    });

    dispatch({ type: MAKE_PREDICTIONS, payload: response.data });
}
