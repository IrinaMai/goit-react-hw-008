const getError = state => state.registration.error;
const getEmail = state => state.registration.email;
const getTtlRegistration = state => state.registration;
const getIsAuth = state => state.registration.isAuth;

export { getError, getTtlRegistration, getEmail, getIsAuth };
