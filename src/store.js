import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import thunk from 'redux-thunk';
import jobsReducer from '../reducers/jobs';
import errorsReducers from '../reducers/errors';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
   combineReducers({
      jobs: jobsReducer,
      errors: errorsReducer
   }),
   composeEnhancers(applyMiddleware(thunk))
);

console.log(store.getState());

export default store;

// in this file, we are creating redux store that uses combineReducers and added thunk from redux-thunk as a middleware for managing
// the Asynchronous API handling.  We also added the redux devtool configuration using composeEnhancers.