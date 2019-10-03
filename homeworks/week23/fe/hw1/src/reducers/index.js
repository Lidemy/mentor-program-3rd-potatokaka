import { combineReducers } from 'redux';
import navReducer from './navReducer';
import allPostsReducer from './allPostsReducer';

const rootReducer = combineReducers({
  nav: navReducer,
  post: allPostsReducer,
})

export default rootReducer;
