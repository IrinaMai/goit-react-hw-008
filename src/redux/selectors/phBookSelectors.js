import { createSelector } from '@reduxjs/toolkit';

const getConctactList = state => state.phoneBook.contactList;
const getFilter = state => state.phoneBook.filter;
const getIsLoading = state => state.phoneBook.isLoading;
const getError = state => state.phoneBook.error;

const getTtlState = state => state.phonebook;

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
