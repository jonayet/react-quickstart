import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import {menu} from "./reducers";

export default function store() {
    const initialState = {
        isFetching: false,
        menu: []
    };

    return createStore(menu, initialState,
        applyMiddleware(
            thunkMiddleware
        ));
}