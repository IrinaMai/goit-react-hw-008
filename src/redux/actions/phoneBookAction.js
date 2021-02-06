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
const addContactError = createAction('@phoneBook/addContactError');
const getContactSuccess = createAction('@phoneBook/getContactSuccess');
const getContactError = createAction('@phoneBook/getContactError');
const deleteContactSuccess = createAction('@phoneBook/deleteContactSuccess');
const deleteContactError = createAction('@phoneBook/deleteContactError');
const deleteError = createAction('@phoneBook/deleteError');

export {
  loading,
  addContactSuccess,
  addContactError,
  getContactSuccess,
  getContactError,
  filterHndl,
  filterClear,
  deleteContactSuccess,
  deleteContactError,
  deleteError,
};
