import { createReducer } from '@reduxjs/toolkit';
import {
  loading,
  addContactSuccess,
  addContactError,
  filterHndl,
  filterClear,
  getContactSuccess,
  getContactError,
  deleteContactSuccess,
  deleteContactError,
  deleteError,
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
    [addContactError]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [getContactSuccess]: (state, action) => ({
      ...state,
      contactList: [...action.payload],
    }),
    [getContactError]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [filterHndl]: (state, action) => ({ ...state, filter: action.payload }),
    [filterClear]: (state, action) => ({ ...state, filter: '' }),
    [deleteContactSuccess]: (state, action) => ({
      ...state,
      contactList: [
        ...state.contactList.filter(item => item.id !== action.payload),
      ],
    }),
    [deleteContactError]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [deleteError]: (state, action) => ({
      ...state,
      error: '',
    }),
  },
);
