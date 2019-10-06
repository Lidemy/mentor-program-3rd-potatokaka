import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers';

const composeStoreWithMiddleWare = applyMiddleware(
  promiseMiddleware,
)(createStore)

const store = composeStoreWithMiddleWare(rootReducer);
// const store = createStore(rootReducer);

export default store;
