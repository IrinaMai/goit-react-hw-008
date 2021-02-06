import { createSelector } from '@reduxjs/toolkit';

const getConctactList = state => state.contactList;
const getFilter = state => state.filter;
const getIsLoading = state => state.isLoading;
const getError = state => state.error;

const getTtlState = state => state;

const filteredList = createSelector(
  [getConctactList, getFilter],
  (contactList, fil) => {
    return contactList.filter(item =>
      item.name.toLowerCase().includes(fil.toLowerCase()),
    );
  },
);

export {
  getConctactList,
  getFilter,
  getIsLoading,
  getError,
  getTtlState,
  filteredList,
};
