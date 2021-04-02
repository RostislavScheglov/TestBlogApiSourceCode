import { combineReducers, createStore, applyMiddleware } from 'redux';
import{composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import postsReducer from './postsReducer';

const middleware = [thunk]

const reducers = combineReducers ({
    postsReducer: postsReducer,

})


const store = createStore(reducers,composeWithDevTools(
    applyMiddleware(...middleware)));

export default store;
