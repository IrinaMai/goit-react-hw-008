import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/actions/registrationAction';
import { getEmail } from '../../redux/selectors/registrationSelector';
import { button, userEmail, logout } from './LogOut.module.css';

const LogOut = () => {
  const email = useSelector(getEmail);
  const dispatch = useDispatch();

  const onLogOutClick = () => {
    dispatch(logOut());
  };
  return (
    <div className={logout}>
      <p className={userEmail}>{email}</p>
      <button type="button" className={button} onClick={onLogOutClick}>
        Log Out
      </button>
    </div>
  );
};

export default LogOut;
