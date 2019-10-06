import { NAV_CHANGE } from '../actions/actionType';

const globalState = {
  nav: '',
}

const navReducer = (state = globalState, action) => {
  switch (action.type) {
    
    case NAV_CHANGE:
      return {
        ...globalState,
        nav: action.value,
      };

    default:
      return state;
  }
}

export default navReducer;
