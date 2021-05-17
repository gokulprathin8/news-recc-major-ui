import {
    GET_CATEGORY
} from "../actions/types";

export default (state = { getCategory: {} }, action) => {
    switch (action.type) {
        case GET_CATEGORY:
            return {
                ...state,
                getCategory: action.payload
            }
        default:
            return state;
    }
};
