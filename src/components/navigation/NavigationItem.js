import React from 'react';
import { NavLink } from 'react-router-dom';
import { navigation, activeNavigation } from './Navigation.module.css';

const NavigationItem = ({
  isAuth,
  path,
  name,
  exact,
  isPrivate,
  restricted,
}) => {
  return (
    <>
      {!isPrivate && !restricted && (
        <li className="listItem" key={path}>
          <NavLink
            to={path}
            exact={exact}
            className={navigation}
            activeClassName={activeNavigation}
          >
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}

      {isAuth && isPrivate && !restricted && (
        <li className="listItem" key={path}>
          <NavLink
            to={path}
            exact={exact}
            className={navigation}
            activeClassName={activeNavigation}
          >
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}

      {!isAuth && !isPrivate && restricted && (
        <li className="listItem" key={path}>
          <NavLink
            to={path}
            exact={exact}
            className={navigation}
            activeClassName={activeNavigation}
          >
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationItem;
