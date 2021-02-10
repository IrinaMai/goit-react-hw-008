import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  logInUserOperation,
  signUpUserOperation,
} from '../../redux/operations/registrationOperation';
import {
  title,
  button,
  input,
  label,
  alert,
  alertMessage,
} from './RegistrationForm.module.css';
import fadeStyled from './fade.module.css';
import { getError } from '../../redux/selectors/registrationSelector';
import { setError } from '../../redux/actions/registrationAction';

const initialUser = {
  email: '',
  password: '',
};

const RegistratioForm = () => {
  const [user, setUser] = useState({ ...initialUser });
  const error = useSelector(getError);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setError(''));
    }, 1500);
    // eslint-disable-next-line
  }, [error]);

  const onUserSubmit = e => {
    e.preventDefault();
    if (location.pathname === '/signup') {
      dispatch(signUpUserOperation(user));
    } else {
      dispatch(logInUserOperation(user));
    }
    setUser({ ...initialUser });
  };

  const onInputChng = e => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h2 className={title}>Registration Form</h2>

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
          {location.pathname === '/signup' ? 'SIGN UP' : 'LOG IN'}
        </button>
      </form>
    </>
  );
};

export default RegistratioForm;
