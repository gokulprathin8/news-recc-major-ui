import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./authReducer";
import newsReducers from "./newsReducers";
import categoryReducer from "./categoryReducer";
import latestNewsReducer from "./latestNewsReducer";


const persistConfig = {
    key: "news-recommendation",
    storage: storage
}

const rootReducer = combineReducers({
    latestNews: latestNewsReducer,
    auth: authReducer,
    category: categoryReducer,
    news: newsReducers,
});

export default  persistReducer(persistConfig, rootReducer);
