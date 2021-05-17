import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import categoryReducer from "./categoryReducer";
import newsReducers from "./newsReducers";

const persistConfig = {
    key: "news-recommendation",
    storage: storage
}

const rootReducer = combineReducers({
    category: categoryReducer,
    news: newsReducers,
});

export default  persistReducer(persistConfig, rootReducer);
