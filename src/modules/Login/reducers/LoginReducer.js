// @flow
import { handleActions } from 'redux-actions';
import loginActions from '../constants/LoginConstants';
import updeep from 'updeep';

const _success = {
  next(state, action) {
    const { token, user } = action.payload;
    return updeep(
      {
        isFetching: false,
        error     : false,
        token,
        user,
      }, state);
  },
};
const _error   = {
  next(state) {
    return updeep(
      {
        isFetching: false,
        error     : true,
      }, state);
  },
};
const _request = {
  next(state) {
    return updeep(
      {
        isFetching: true,
        error     : false,
      }, state);
  },
};

const loginReducer = {
  [loginActions.LOGIN_REQUEST]: _request,
  [loginActions.LOGIN_SUCCESS]: _success,
  [loginActions.LOGIN_ERROR]  : _error,
};

export default handleActions(
  loginReducer,
  {
    isFetching: false,
    error     : false,
    token     : '',
    user      : {},
  }
);
