import {
    GET_NEWS
} from "../actions/types";



export default (state = { getNews: {} }, action) => {
    switch (action.type) {
        case GET_NEWS:
            return {
                ...state,
                getNews: action.payload
            }
        default:
            return state;
    }
}
