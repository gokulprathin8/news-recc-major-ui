import {
    FETCH_COUNTS,
    POST_COUNTS
} from "../actions/types";

export default (state = { counts: {}, totalCounts: {} }, action) => {
    switch (action.type) {
        case FETCH_COUNTS:
            return {
                ...state,
                totalCounts: action.payload
            }
        case POST_COUNTS:
            return {
                ...state,
                counts: action.payload
            }
        default:
            return state;
    }
}
