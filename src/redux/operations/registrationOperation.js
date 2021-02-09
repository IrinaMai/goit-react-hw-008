// import axios from 'axios';
// import { registration, loading, setError } from '../actions/registrationAction';

// const apiKey = 'AIzaSyBgO2BUy10LColBRzKm9hZ1gUG8vpvL-QA';
// const url =
//   'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBgO2BUy10LColBRzKm9hZ1gUG8vpvL-QA';

// const loginUserOperation = user => async dispatch => {
//   dispatch(loading());
//   try {
//     const response = await axios.post(url, {
//       ...user,
//       returnSecureToken: true,
//     });
//     dispatch(registration(response.data));
//   } catch (error) {
//     dispatch(setError(error));
//   } finally {
//     dispatch(loading());
//   }
// };

// export { loginUserOperation };

// const signInOperation = user => async dispatch => {
//   dispatch(setLoading());
//   try {
//     const response = await axios.post(process.env.REACT_APP_SIGNIN_URL, {
//       ...user,
//       returnSecureToken: true,
//     });
//     dispatch(signIn(response.data));
//   } catch (error) {
//     dispatch(setError(error));
//   } finally {
//     dispatch(setLoading());
//   }
// };

// export { signUpOperation, signInOperation };
