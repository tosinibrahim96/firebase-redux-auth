import { actionTypes } from '../actions/actionTypes';


const { SET_CURRENT_USER } = actionTypes;
const INITIAL_STATE = {
  currentUser: null
};

export const setCurrentUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};