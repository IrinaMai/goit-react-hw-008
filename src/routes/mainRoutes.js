import { lazy } from 'react';

export const mainRoutes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: lazy(() => import('../pages/HomePage')),
    private: false,
    restricted: false,
  },
  {
    path: '/login',
    name: 'Log In',
    exact: true,
    component: lazy(() => import('../pages/LogInPage')),
    private: false,
    restricted: true,
  },
  {
    path: '/contact',
    name: 'Phone Book',
    exact: true,
    component: lazy(() => import('../pages/PhoneBookPage')),
    private: true,
    restricted: false,
  },
];
