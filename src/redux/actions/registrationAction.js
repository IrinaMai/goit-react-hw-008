import { createAction } from '@reduxjs/toolkit';

const registrationAction = createAction('@auth/registration');
const logOut = createAction('@auth/logOut');
const loading = createAction('@auth/loading');
const setError = createAction('@auth/setError');

export { registrationAction, logOut, loading, setError };
