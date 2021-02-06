import { createReducer } from '@reduxjs/toolkit';
import {
  loading,
  addContactSuccess,
  filterHndl,
  filterClear,
  getContactSuccess,
  deleteContactSuccess,
  setError,
} from '../actions/phoneBookAction';

const initialState = {
  contactList: [],
  filter: '',
  isLoading: false,
  error: '',
};

export const phBookReducer = createReducer(
  { ...initialState },
  {
    [loading]: state => ({
      ...state,
      isLoading: !state.isLoading,
    }),

    [addContactSuccess]: (state, action) => ({
      ...state,
      contactList: [...state.contactList, action.payload],
    }),
    [getContactSuccess]: (state, action) => ({
      ...state,
      contactList: [...action.payload],
    }),

    [filterHndl]: (state, action) => ({ ...state, filter: action.payload }),
    [filterClear]: (state, action) => ({ ...state, filter: '' }),
    [deleteContactSuccess]: (state, action) => ({
      ...state,
      contactList: [
        ...state.contactList.filter(item => item.id !== action.payload),
      ],
    }),
    [setError]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
);
