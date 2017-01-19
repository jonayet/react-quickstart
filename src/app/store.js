import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import rootReducer from "./reducers";

export default function store() {
    const initialState = {
        flags: {
            isFetching: false,
        },
        menu: []
    };

    return createStore(rootReducer, initialState,
        applyMiddleware(
            thunkMiddleware
        ));
}