import {
    MAKE_PREDICTIONS
} from "../actions/types";

export default (state = { counts: {} }, action) => {
    switch (action.type) {
        case MAKE_PREDICTIONS:
            return {
                ...state,
                counts: action.payload
            }
        default:
            return state;
    }
}
