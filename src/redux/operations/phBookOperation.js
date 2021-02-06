import axios from 'axios';
import {
  loading,
  addContactSuccess,
  addContactError,
  getContactSuccess,
  getContactError,
  deleteContactSuccess,
  deleteContactError,
} from '../actions/phoneBookAction';

const baseUrl = 'https://phonebook-d5757-default-rtdb.firebaseio.com/';

const addContactToDB = contact => dispatch => {
  dispatch(loading());

  axios
    .post(`${baseUrl}/contacts.json`, contact)
    .then(response => {
      dispatch(addContactSuccess({ ...contact, id: response.data.name }));
    })
    .catch(error => dispatch(addContactError(error)))
    .finally(() => dispatch(loading()));
};

const getContactsFromDB = () => dispatch => {
  dispatch(loading());

  axios
    .get(`${baseUrl}/contacts.json`)
    .then(response => {
      dispatch(
        getContactSuccess(
          Object.keys(response.data).map(item => ({
            ...response.data[item],
            id: item,
          })),
        ),
      );
    })
    .catch(error => dispatch(getContactError(error)))
    .finally(() => dispatch(loading()));
};

const deleteContactById = id => dispatch => {
  dispatch(loading());

  axios
    .delete(`${baseUrl}/contacts/${id}.json`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)))
    .finally(() => dispatch(loading()));
};

export { addContactToDB, getContactsFromDB, deleteContactById };
