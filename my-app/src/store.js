import { userProfileReducer } from '../src/features/UserProfile/dali.userprofile.reducer';
import { tweetsReducer } from '../src/reducers/reducer_tweets';
import { combineReducers, createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';

function logger({ getState }) {
    return next => action => {
      console.log('will dispatch', action);
      
      // Call the next dispatch method in the middleware chain.
      const returnValue = next(action);
      console.log('state after dispatch', getState());
      
      // This will likely be the action itself, unless
      // a middleware further in chain changed it.
      return returnValue;
    }
  }
  
const reducers = combineReducers({
    user: userProfileReducer,
    tweets: tweetsReducer
});

export const client_store = createStore(reducers, applyMiddleware(logger, thunk));

client_store.subscribe(() => {
    console.log("store changed client", client_store.getState());
});

export default client_store;