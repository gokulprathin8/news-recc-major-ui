import news from "../api";
import { USER_LOGIN, LOGOUT_USER } from "./types";

export const auth = (formValues) => async (dispatch) => {
    const response = await news.post("/token/", formValues);

    dispatch({ type: USER_LOGIN, payload: response.data });
};

export const logoutUser = () => async (dispatch) => {
    dispatch({ type: LOGOUT_USER, payload: {} });
}
