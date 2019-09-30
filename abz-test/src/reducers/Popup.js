import * as types from '../action/action-types';

const initialState = {
    showPopup: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_POPUP_FORM:
            return {
                ...state,
                showPopup: true
            };
        case types.CLOSE_POPUP_FORM:
            return {
                ...state,
                showPopup: false
            };
        default:
            return state;
    }
};