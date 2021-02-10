import axios from 'axios';
import {
  registrationAction,
  loading,
  setError,
} from '../actions/registrationAction';

const signUpUserOperation = user => async dispatch => {
  dispatch(loading());
  try {
    const response = await axios.post(process.env.REACT_APP_SIGN_UP, {
      ...user,
      returnSecureToken: true,
    });
    dispatch(registrationAction(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(loading());
  }
};

const logInUserOperation = user => async dispatch => {
  dispatch(loading());
  try {
    const response = await axios.post(process.env.REACT_APP_LOG_IN, {
      ...user,
      returnSecureToken: true,
    });
    dispatch(registrationAction(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(loading());
  }
};

export { signUpUserOperation, logInUserOperation };
