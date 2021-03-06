import axios from "axios";

import {
  GET_PROFILE,
  LOADING,
  CLEAR_CURRENT_PROFILE
} from "./types";


// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("http://localhost:3001/application/user/profile")
    .then(res => {
        dispatch({
          type: GET_PROFILE,
          payload: res.data
        })

      }
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};


// Profile loading
export const setProfileLoading = () => {
  return {
    type: LOADING
  };
};

export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
