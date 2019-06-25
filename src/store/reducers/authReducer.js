import {SET_CURRENT_USER, GET_USER_INFO, SET_CURRENT_USER_AFTER_UPDATE_IMAGE} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {},
  userInfo: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !(action.payload).empty,
        user: action.payload
      };
    default:
      return state;
  }
}
