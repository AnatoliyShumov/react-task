import * as types from "../action/action-types";

const initialState = {
    loading: false,
    headerUser: [],
    error: null,

};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PERSON_HEADER_STARTED:
            return {
                ...state,
                loading: true
            };
        case types.GET_PERSON_HEADER_SUCCESS:
            const {user} = action.payload;
            return {
                ...state,
                headerUser: user
            };
        case types.GET_PERSON_HEADER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
};