import { lazy } from 'react';

export const mainRoutes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: lazy(() => import('../pages/HomePage')),
    isPrivate: false,
    restricted: false,
  },
  {
    path: '/signup',
    name: 'Sign Up',
    exact: true,
    component: lazy(() => import('../pages/SigUpPage')),
    isPrivate: false,
    restricted: true,
  },
  {
    path: '/login',
    name: 'Log In',
    exact: true,
    component: lazy(() => import('../pages/LogInPage')),
    isPrivate: false,
    restricted: true,
  },
  {
    path: '/contact',
    name: 'Phone Book',
    exact: true,
    component: lazy(() => import('../pages/PhoneBookPage')),
    isPrivate: true,
    restricted: false,
  },
];
