import keyMirror from 'keymirror';

const loginActions = keyMirror(
  {
    LOGIN_REQUEST: null,
    LOGIN_SUCCESS: null,
    LOGIN_ERROR  : null,
  });

export default loginActions;
