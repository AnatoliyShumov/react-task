import * as types from './action-types';
import axios from 'axios';

const getPersonStarted = () => ({
    type: types.GET_PERSON_STARTED,
});

const getPersonSuccess = people => ({
    type: types.GET_PERSON_SUCCESS ,
    payload: {
        ...people
    }
});

const getPersonFailure = error => ({
    type: types.GET_PERSON_FAILURE,
    payload: {
        error
    }
});

const showPopup = () => ({
    type: types.SHOW_POPUP_FORM
});

export const closePopup  = () => ({
    type: types.CLOSE_POPUP_FORM
});

const getDynamicToken = () => ({
    type: types.GET_DYNAMIC_TOKEN,
});

const getPersonHeaderStarted = () => ({
    type: types.GET_PERSON_HEADER_STARTED,
});

const getPersonHeaderSuccess = headerUser => ({
    type: types.GET_PERSON_HEADER_SUCCESS ,
    payload: {
        ...headerUser
    }
});

const getPersonHeaderFailure = error => ({
    type: types.GET_PERSON_HEADER_FAILURE,
    payload: {
        error
    }
});

const postPersonStarted = () => ({
    type: types.POST_PERSON_STARTED,
});

const postPersonSuccess = people => ({
    type: types.POST_PERSON_SUCCESS ,
    payload: {
        ...people
    }
});

const postPersonFailure = error => ({
    type: types.POST_PERSON_FAILURE,
    payload: {
        error
    }
});

export const getToken = () => {
    return(dispatch) => {
        axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token')
            .then(({data}) => {
                axios.defaults.headers.common['Token'] = data.token;
                dispatch(getDynamicToken());
            })
    }
};

export const getPerson = (init) => {
    return (dispatch, getState) => {
        const state = getState().people;
        if(state.loading || state.lastPage){
            return false;
        }
        dispatch(getPersonStarted());
        const page = init ? 1 : state.page + 1;
        axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`)
            .then(function({data}) {
                if(data.success) {
                    dispatch(getPersonSuccess({...data, init}));
                }
            })
            .catch(err => {
                dispatch(getPersonFailure(err.message))
            });
    }
};

export const getPersonHeader = () => {
    return (dispatch) => {
        // диспатчим лоадер
        dispatch(getPersonHeaderStarted());
        axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users/1`)
            .then(function({data}) {
                if(data.success) {

                    dispatch(getPersonHeaderSuccess(data))
                    // process success response
                }
            })
            .catch(err => {
                dispatch(getPersonHeaderFailure(err.message))
            });
    }
};

export const postForm = (values) => {
    return(dispatch) => {
        let data = new FormData();
        Object.keys(values).map(function(key) {
            data.append(key, values[key]);
        });
        dispatch(postPersonStarted());
        axios.post(`https://frontend-test-assignment-api.abz.agency/api/v1/users`, data,
            { headers: {
                    'Content-Type': 'multipart/form-data',
                } })
            .then(res => {
                // this.props.actions.getPerson(true)
                dispatch(postPersonSuccess());
                dispatch(getPerson(true));
                dispatch(showPopup())
            })
            .catch(err => {
                dispatch(postPersonFailure(err));
            })
    }
};


