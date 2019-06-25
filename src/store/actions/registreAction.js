import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import {loginUser} from "../actions/authActions";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER, GET_USER_INFO , SET_CURRENT_USER_AFTER_UPDATE_IMAGE } from "./types";
export const registerUser = userData => dispatch => {
    console.log(userData);
    axios
      .post("http://localhost:3001/application/user/signUp", userData)
      .then(res => {
          const auth = {
              email : userData.email,
              password : userData.password,

          }
            dispatch(loginUser(auth))
        
      })
      .catch(err => {
          console.log(err.response.data);
          dispatch({
            type: GET_ERRORS,
            payload: err.response.data
          })
        }
      );
  };
  