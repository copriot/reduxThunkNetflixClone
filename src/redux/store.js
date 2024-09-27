import movieReducer from "./reducers/movieReducer";
import genreReducer from "./reducers/genreReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    movie: movieReducer,
    genre: genreReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
