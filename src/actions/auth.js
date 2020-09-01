import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const clearError = () => {
  return {
    type: actionTypes.AUTH_CLEAR,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  localStorage.removeItem("user");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const auth = ({
  email,
  password,
  passwordConfirm,
  dateOfBirth,
  contact,
  name,
}) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
      dateOfBirth: dateOfBirth,
      contact: contact,
      name: name,
    };
    let url = "/api/v1/users/signup";
    axios
      .post(url, authData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", response.data.data.user);
        localStorage.setItem("userId", response.data.data.user._id);
        dispatch(
          authSuccess(
            response.data.token,
            response.data.data.user._id,
            response.data.data.user
          )
        );
      })
      .catch((error) => {
        dispatch(authFail(error.response.data.message));
      });
  };
};

export const authLogin = ({ email, password }) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
    };
    let url = "/api/v1/users/login";
    axios
      .post(url, authData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.data.user._id);
        localStorage.setItem("user", response.data.data.user.name);

        let token, userId, user;
        token = localStorage.getItem("token");
        userId = localStorage.getItem("userId");
        user = localStorage.getItem("user");

        dispatch(authSuccess(token, userId, user));
      })
      .catch((error) => {
        dispatch(authFail(error.response.data));
      });
  };
};

export const resetPassword = ({
  email,
  password,
  passwordConfirm,
  dateOfBirth,
  contact,
  name,
}) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
      dateOfBirth: dateOfBirth,
      contact: contact,
      name: name,
    };
    let url = "/api/v1/users/forgotPassword";
    axios
      .post(url, authData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.data.user._id);
        localStorage.setItem("user", response.data.data.user.name);

        let token, userId, user;
        token = localStorage.getItem("token");
        userId = localStorage.getItem("userId");
        user = localStorage.getItem("user");

        dispatch(authSuccess(token, userId, user));
      })
      .catch((error) => {
        dispatch(authFail(error.response.data));
      });
  };
};
