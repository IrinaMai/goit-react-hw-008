import axios from 'axios';
import {
  loading,
  addContactSuccess,
  getContactSuccess,
  deleteContactSuccess,
  setError,
} from '../actions/phoneBookAction';

const addContactToDB = contact => dispatch => {
  dispatch(loading());

  axios
    .post(`${process.env.REACT_APP_BASE_URL}contacts.json`, contact)
    .then(response => {
      dispatch(addContactSuccess({ ...contact, id: response.data.name }));
    })
    .catch(error => dispatch(setError('ooops samthing going wrong')))
    .then(
      setTimeout(() => {
        dispatch(setError(''));
      }, 1500),
    )
    .finally(() => dispatch(loading()));
};

const getContactsFromDB = () => dispatch => {
  dispatch(loading());
  axios
    .get(`${process.env.REACT_APP_BASE_URL}contacts.json`)
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
    .catch(error => dispatch(setError('No one contact')))
    .then(
      setTimeout(() => {
        dispatch(setError(''));
      }, 1500),
    )
    .finally(() => dispatch(loading()));
};

const deleteContactById = id => dispatch => {
  dispatch(loading());

  axios
    .delete(`${process.env.REACT_APP_BASE_URL}contacts/${id}.json`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(setError('ooops samthing going wrong')))
    .then(
      setTimeout(() => {
        dispatch(setError(''));
      }, 1500),
    )
    .finally(() => dispatch(loading()));
};

export { addContactToDB, getContactsFromDB, deleteContactById };
