import {
    GET_LATEST_NEWS
} from "../actions/types";



export default (state = { data: {} }, action) => {
    switch (action.type) {
        case GET_LATEST_NEWS:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}
