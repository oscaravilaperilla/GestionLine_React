

export function simpleAction(text) {
    return {
        type: 'SIMPLE_ACTION',
        payload: text
    }
};

export function secondAction(text) {
    return {
        type: 'SECOND_ACTION',
        payload: text
    }
};

export function SecondloadText(text) {
    return dispatch => {
        dispatch(secondAction(text));
    };
}

export function loadText() {
    return dispatch => {
        dispatch(simpleAction('Texto oscar'));
    };
}