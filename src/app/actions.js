export const REQUEST_MENU = 'REQUEST_MENU';
export const RECEIVE_MENU = 'RECEIVE_MENU';

function requestMenu() {
    return {
        type: REQUEST_MENU
    }
}

function receiveMenu(menu) {
    return {
        type: RECEIVE_MENU,
        menu
    }
}

export function getMenu() {
    return dispatch => {
        dispatch(requestMenu());
        setTimeout(() => {
            dispatch(receiveMenu(
                [
                    'Menu 1',
                    'Menu 2',
                    'Menu 3',
                    'Menu 4'
                ]
            ));
        }, 3000);
    }
}