import {GET_MENU} from '../actions'

export function menu(state = [], action) {
    switch (action.type) {
        case GET_MENU:
            return action.menu;
        default:
            return state
    }
}