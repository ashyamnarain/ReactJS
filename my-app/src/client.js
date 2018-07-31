import { combineReducers, createStore } from 'redux';
import { userReducer } from '../src/reducers/reducer.user';
import { tweetsReducer } from '../src/reducers/reducer.tweets';

const reducers = combineReducers({
    user: userReducer,
    tweets: tweetsReducer
});

const store = createStore(reducers);

store.subscribe(() => {
    console.log("store changed", store.getState());
});

store.dispatch({type: "CHANGE_NAME", payLoad: "Will"});
store.dispatch({type: "CHANGE_AGE", payLoad: 35});
store.dispatch({type: "CHANGE_AGE", payLoad: 36});