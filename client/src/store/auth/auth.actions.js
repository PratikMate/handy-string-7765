import axios from "axios";
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./auth.types";

// form
   // input feilds => api
     // -username/email
     // -password

// thunk will help us thus writing two functions
export const loginAPI = (data) => (dispatch) => { 
    dispatch({ type: LOGIN_LOADING });
    axios
        .post("http://localhost:8080/api/auth/", {
        email: data.email,
        password: data.password
        })
        .then((r) => {
        dispatch({ type: LOGIN_SUCCESS, payload:r.data });
        })
        .catch(() => {
        dispatch({ type: LOGIN_ERROR });
    })
}

export const logout = () => ({ type: LOGOUT });