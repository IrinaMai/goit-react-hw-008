import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuth } from '../../redux/selectors/registrationSelector';
import { navigationList, navigationDiv } from './Navigation.module.css';
import NavigationItem from './NavigationItem';
import { mainRoutes } from '../../routes/mainRoutes';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoute';
import LogOut from '../logOut/LogOut';

const Navigation = () => {
  const isAuth = useSelector(getIsAuth);
  return (
    <>
      <div className={navigationDiv}>
        <ul className={navigationList}>
          {mainRoutes.map(item => (
            <NavigationItem {...item} isAuth={isAuth} key={item.path} />
          ))}
          {isAuth && (
            <li>
              <LogOut />
            </li>
          )}
        </ul>
      </div>
      <Suspense fallback={<h2>...Loading</h2>}>
        <Switch>
          {mainRoutes.map(route =>
            route.isPrivate ? (
              <PrivateRoute {...route} isAuth={isAuth} key={route.path} />
            ) : (
              <PublicRoute {...route} isAuth={isAuth} key={route.path} />
            ),
          )}
        </Switch>
      </Suspense>
    </>
  );
};

export default Navigation;
