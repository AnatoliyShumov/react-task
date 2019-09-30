import * as types from '../action/action-types';

const initialState = {
    loading: false,
    person: [],
    error: null,
    page: 1,
    lastPage: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PERSON_STARTED:
            return {
                ...state,
                loading: true
            };
        case types.GET_PERSON_SUCCESS:
            const {users, page, total_pages, init} = action.payload;
            // console.log(action)
            return {
                ...state,
                loading: false,
                error: null,
                person: init ? users : [...state.person, ...users],
                page,
                lastPage: total_pages <= page,
            };
        case types.GET_PERSON_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
};