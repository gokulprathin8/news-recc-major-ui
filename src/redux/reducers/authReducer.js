import {
    USER_LOGIN,
    LOGOUT_USER
} from "../actions/types";

export default (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                user: action.payload
            }
        case LOGOUT_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
};
