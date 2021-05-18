import {
    TRENDING_NEWS
} from "../actions/types";

export default (state = { trending: {} }, action) => {
    switch (action.type) {
        case TRENDING_NEWS:
            return {
                ...state,
                trending: action.payload
            }
        default:
            return state;
    }
};
