import React from 'react';
import { Link } from 'react-router-dom';
import { linkTo } from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <h1>Welcome to our site</h1>
      <p>
        If you want to keep yourcontacts with our Phone Book{' '}
        <Link to="/signup" className={linkTo}>
          Sign Up{' '}
        </Link>
        on our site!
      </p>
    </>
  );
};

export default HomePage;
