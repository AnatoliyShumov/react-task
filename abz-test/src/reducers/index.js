import people from './people-reducer.js';
import headerUser from './headerReducer.js';
import popup from './Popup'
import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
    people,
    headerUser,
    form: formReducer,
    popup,
});

export default rootReducer;