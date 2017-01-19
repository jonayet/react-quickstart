import {combineReducers} from 'redux'
import {menu} from './menu';
import {flags} from './flags';

export default combineReducers({
    menu,
    flags
})