import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';

import {
  title,
  button,
  input,
  label,
  alert,
  alertMessage,
} from './RegistrationForm.module.css';
import fadeStyled from './fade.module.css';
import { loginUserOperation } from '../../redux/operations/registrationOperation';
import { registrationAction } from '../../redux/actions/registrationAction';

const initialUser = {
  email: '',
  password: '',
  error: '',
};

const RegistratioForm = () => {
  const [user, setUser] = useState({ ...initialUser });
  const dispatch = useDispatch();

  const onUserSubmit = e => {
    e.preventDefault();
    console.log(user);
    dispatch(registrationAction(user));
  };

  const onInputChng = e => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h2 className={title}>Registration Form</h2>

      {/* <CSSTransition
        in={error.length > 0}
        timeout={250}
        unmountOnExit
        classNames={fadeStyled}
      >
        <div className={alert}>
          <p className={alertMessage}>{error}</p>
        </div>
      </CSSTransition> */}

      <form onSubmit={onUserSubmit}>
        <label className={label}>
          Email:
          <input
            name="email"
            value={user.email}
            onChange={onInputChng}
            className={input}
          />
        </label>
        <label className={label}>
          Password:
          <input
            name="password"
            value={user.password}
            onChange={onInputChng}
            className={input}
          />
        </label>
        <button type="submit" className={button}>
          Log In
        </button>
      </form>
    </>
  );
};

export default RegistratioForm;
