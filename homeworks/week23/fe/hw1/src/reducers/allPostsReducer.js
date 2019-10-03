import { GET_ALL_POSTS, GET_LATEST_POSTS, GET_SINGLE_POST, CREATE_POST, DELETE_POST, EDIT_POST } from '../actions/actionType';


const initialState = {
  allPosts: [],
  singlePost: {},
  latestPosts: [],
  createDone: false,
  editDone: false,
  deleteDone: false,
}

const allPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    /*  case GET_ALL_POSTS:
       return {
         ...state,
         allPosts: action.payload.data
       }; */
    
    case `${GET_ALL_POSTS}_PENDING`:
      return {
        ...state,
      };
    case `${GET_ALL_POSTS}_FULFILLED`:
      return {
        ...state,
        allPosts: action.payload.data,
      };
    case `${GET_ALL_POSTS}_REJECTED`:
      return {
        ...state,
      }; 

    /* latest post ---------------------------*/
    case `${GET_LATEST_POSTS}_PENDING`:
      return {
        ...state,
      };
    case `${GET_LATEST_POSTS}_FULFILLED`:
      return {
        ...state,
        latestPosts: action.payload.data,
      };
    case `${GET_LATEST_POSTS}_REJECTED`:
      return {
        ...state,
      };

    /* single post ---------------------------*/
    case `${GET_SINGLE_POST}_PENDING`:
      return {
        ...state,
      };
    case `${GET_SINGLE_POST}_FULFILLED`:
      return {
        ...state,
        singlePost: action.payload.data,
      };
    case `${GET_SINGLE_POST}_REJECTED`:
      return {
        ...state,
      }; 
    
    case `${CREATE_POST}_PENDING`:
      return {
        ...state,
        createDone: true,
      };
  
    case `${CREATE_POST}_FULFILLED`:　
      return Object.assign({}, state, {
        singlePost: action.payload.data,
        createDone: false,
      })

    case `${CREATE_POST}_REJECTED`:
      return {
        ...state,
        createDone: false,
      };

    case `${EDIT_POST}_PENDING`:
      return {
        ...state,
        editDone: true,
      };
    
    case `${EDIT_POST}_FULFILLED`:　
      return Object.assign({}, state, {
        singlePost: action.payload.data,
        editDone: false,
      })

    case `${EDIT_POST}_REJECTED`:
      return {
        ...state,
        editDone: false,
      };

    case `${DELETE_POST}_PENDING`:
      return {
        ...state,
        deleteDone: true,
      };
    
    case `${DELETE_POST}_FULFILLED`:　
      return Object.assign({}, state, {
        singlePost: action.payload.data,
        deleteDone: false,
      })

    case `${DELETE_POST}_REJECTED`:
      return {
        ...state,
        deleteDone: false,
      };

    default:
      return state;
  }
}

export default allPostsReducer;
