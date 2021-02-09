import { createReducer } from '@reduxjs/toolkit';
import {
  registrationAction,
  logOut,
  loading,
  setError,
} from '../actions/registrationAction';

const initialState = {
  email: '',
  idToken: '',
  refreshToken: '',
  isAuth: false,
  isLoading: false,
  localId: '',
  error: '',
};

export const registrationReducer = createReducer(
  { ...initialState },
  {
    [registrationAction]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [loading]: state => ({ ...state, isLoading: !state.isLoading }),
    [setError]: (state, action) => ({ ...state, error: action.payload }),
  },
);
