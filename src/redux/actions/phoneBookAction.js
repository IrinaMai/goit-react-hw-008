import { createAction } from '@reduxjs/toolkit';

const filterHndl = createAction('@phoneBook/addFilter');
const filterClear = createAction('@phoneBook/clearFilter');
const loading = createAction('@phoneBook/loading');
const addContactSuccess = createAction(
  '@phoneBook/addContactSuccess',
  contact => ({
    payload: { ...contact },
  }),
);
const getContactSuccess = createAction('@phoneBook/getContactSuccess');
const deleteContactSuccess = createAction('@phoneBook/deleteContactSuccess');
const setError = createAction('@phoneBook/setError');

export {
  loading,
  filterHndl,
  filterClear,
  addContactSuccess,
  getContactSuccess,
  deleteContactSuccess,
  setError,
};
