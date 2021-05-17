import news from "../api";
import { USER_LOGIN } from "./types";

export const fetchUser = (formValues) => async (dispatch) => {
    const response = await news.post("/public/adminlogin", formValues);

    dispatch({ type: USER_LOGIN, payload: response.data });
};
