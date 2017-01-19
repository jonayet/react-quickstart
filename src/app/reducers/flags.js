import {FETCHING_STARTED, FETCHING_COMPLETED} from '../actions';

export function flags(state = {}, action) {
    switch (action.type) {
        case FETCHING_STARTED:
            return Object.assign({}, state, {
                isFetching: true
            });
        case FETCHING_COMPLETED:
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state
    }
}