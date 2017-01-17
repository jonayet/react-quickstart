import {REQUEST_MENU, RECEIVE_MENU} from './actions'

export function menu(state = {}, action) {
    switch (action.type) {
        case REQUEST_MENU:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_MENU:
            return Object.assign({}, state, {
                isFetching: false,
                menu: action.menu
            });
        default:
            return state
    }
}