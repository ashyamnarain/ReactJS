import { userProfileReducer } from './dali.userprofile.reducer';
import { combineReducers, createStore, applyMiddleware  } from 'redux';
import { combineForms } from 'react-redux-form';
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
  
const initialUserState = { name: '' };

const reducers = combineReducers({
    user: userProfileReducer,
    // Make sure to specify the key as the second argument, so that RRF
    // knows where the form and model reducers exist in the store!
    dali_userprofileForm: combineForms({
        user: initialUserState,
    }, 'dali_userprofileForm'),
});

export const userProfileStore = createStore(reducers, applyMiddleware(logger, thunk));

userProfileStore.subscribe(() => {
    console.log("store changed userprofile", userProfileStore.getState());
});

export default userProfileStore;