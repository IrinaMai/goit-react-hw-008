import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
  title,
  button,
  input,
  label,
  alert,
  alertMessage,
} from './PhoneBookForm.module.css';
import fadeStyled from './fade.module.css';
import { addContactToDB } from '../../redux/operations/phBookOperation';
import {
  getConctactList,
  getError,
  getIsLoading,
} from '../../redux/selectors/phBookSelectors';
import {
  addContactError,
  deleteError,
} from '../../redux/actions/phoneBookAction';

const initialState = {
  name: '',
  phone: '',
  message: '',
};

const PhoneBookForm = () => {
  const [contact, setContact] = useState({ ...initialState });
  const contactList = useSelector(getConctactList);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  const onContactSubmit = e => {
    e.preventDefault();
    if (!contact.name || !contact.phone) {
      dispatch(addContactError('All fields should be complited'));
      setTimeout(() => {
        dispatch(deleteError());
      }, 1500);
      return;
    }
    if (
      contactList.find(
        ({ name }) => name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      dispatch(addContactError('This name already exist'));
      setTimeout(() => {
        dispatch(deleteError());
      }, 1500);
      return;
    }
    if (contactList.find(({ phone }) => phone == contact.phone)) {
      dispatch(addContactError('This phone belongs another contact'));
      setTimeout(() => {
        dispatch(deleteError());
      }, 1500);
      return;
    }
    dispatch(addContactToDB(contact));
    setContact({ ...initialState });
  };

  const onInputChng = e => {
    const { name, value } = e.target;
    setContact(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h2 className={title}>Phonebook</h2>

      <CSSTransition
        in={error.length > 0}
        timeout={250}
        unmountOnExit
        classNames={fadeStyled}
      >
        <div className={alert}>
          <p className={alertMessage}>{error}</p>
        </div>
      </CSSTransition>

      <form onSubmit={onContactSubmit}>
        <label className={label}>
          Name:
          <input
            name="name"
            value={contact.name}
            onChange={onInputChng}
            className={input}
          />
        </label>
        <label className={label}>
          Number:
          <input
            name="phone"
            value={contact.phone}
            onChange={onInputChng}
            className={input}
          />
        </label>
        <button type="submit" className={button}>
          Add Contact
        </button>
      </form>
    </>
  );
};

export default PhoneBookForm;
