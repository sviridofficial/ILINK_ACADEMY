import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from 'redux-form'
import commentReducer from "./reducers/commentReducer";
import appReducer from "./reducers/appReducer";
import thunk from "redux-thunk"

let reducers = combineReducers({
    form: formReducer,
    commentReducer: commentReducer,
    appReducer: appReducer
});
let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;

export default store;