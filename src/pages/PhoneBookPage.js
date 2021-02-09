import React from 'react';
import ContactList from '../components/contactList/ContactList';
import PhoneBookForm from '../components/phoneBookForm/PhoneBookForm';

const PhoneBookPage = () => {
  return (
    <>
      <PhoneBookForm />
      <ContactList />
    </>
  );
};

export default PhoneBookPage;
