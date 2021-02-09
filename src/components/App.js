import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContactsFromDB } from '../redux/operations/phBookOperation';
import ContactList from './contactList/ContactList';
import Navigation from './navigation/Navigation';
import PhoneBookForm from './phoneBookForm/PhoneBookForm';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsFromDB());
  }, [dispatch]);

  return <Navigation />;
}

export default App;
