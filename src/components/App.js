import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContactsFromDB } from '../redux/operations/phBookOperation';
import ContactList from './contactList/ContactList';
import PhoneBookForm from './phoneBookForm/PhoneBookForm';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsFromDB());
  }, []);

  return (
    <>
      <PhoneBookForm />
      <ContactList />
    </>
  );
}

export default App;
