export const GET_MENU = 'GET_MENU';
export const FETCHING_STARTED = 'FETCHING_STARTED';
export const FETCHING_COMPLETED = 'FETCHING_COMPLETED';

function startFetching() {
    return {
        type: FETCHING_STARTED
    }
}

function completeFetching(){
    return {
        type: FETCHING_COMPLETED
    }
}

function receiveMenu(menu) {
    return {
        type: GET_MENU,
        menu
    }
}

export function getMenu() {
    return dispatch => {
        dispatch(startFetching());
        setTimeout(() => {
            dispatch(receiveMenu(
                [
                    'Menu 1',
                    'Menu 2',
                    'Menu 3',
                    'Menu 4'
                ]
            ));
            dispatch(completeFetching());
        }, 3000);
    }
}