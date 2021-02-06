import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { checkNewContactMdlw } from './middleWare/checkNewContactMdlw';
import { phBookReducer } from './reducers/phonebookReducer';

const defaultMiddleware = getDefaultMiddleware();

const store = configureStore({
  reducer: phBookReducer,
  middleware: [...defaultMiddleware],
});

export default store;
