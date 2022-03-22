import {combineReducers, createStore} from "redux";
import {reducer as formReducer} from 'redux-form'
import commentReducer from "./reducers/commentReducer";

let reducers = combineReducers({
    form: formReducer,
    commentReducer: commentReducer
});
let store = createStore(reducers);
window.store = store;

export default store;