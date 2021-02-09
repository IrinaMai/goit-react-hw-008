import React, { Suspense } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { mainRoutes } from '../../routes/mainRoutes';
import {
  activeNavigation,
  navigation,
  navigationList,
  navigationDiv,
} from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <div className={navigationDiv}>
        <ul className={navigationList}>
          {mainRoutes.map(item => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                exact={item.exact}
                className={navigation}
                activeClassName={activeNavigation}
              >
                {item.name.toUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <Suspense fallback={<h2>...Loading</h2>}>
        <Switch>
          {mainRoutes.map(item => (
            <Route
              path={item.path}
              key={item.path}
              component={item.component}
              exact={item.exact}
            />
          ))}
        </Switch>
      </Suspense>
    </>
  );
};

export default Navigation;
