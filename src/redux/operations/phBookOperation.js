import axios from 'axios';
import {
  loading,
  addContactSuccess,
  getContactSuccess,
  deleteContactSuccess,
  setError,
} from '../actions/phoneBookAction';

const addContactToDB = contact => (dispatch, getState) => {
  const token = getState().registration.idToken;
  const userId = getState().registration.localId;
  // axios.defaults.headers.common['Authorization'] = token;
  dispatch(loading());

  axios
    .post(
      `${process.env.REACT_APP_BASE_URL}contacts/${userId}.json?auth=${token}`,
      contact,
    )
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

const getContactsFromDB = () => (dispatch, getState) => {
  const token = getState().registration.idToken;
  const userId = getState().registration.localId;
  dispatch(loading());
  axios
    .get(
      `${process.env.REACT_APP_BASE_URL}contacts/${userId}.json?auth=${token}`,
    )
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

const deleteContactById = id => (dispatch, getState) => {
  const token = getState().registration.idToken;
  const userId = getState().registration.localId;
  dispatch(loading());

  axios
    .delete(
      `${process.env.REACT_APP_BASE_URL}contacts/${userId}/${id}.json?auth=${token}`,
    )
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
