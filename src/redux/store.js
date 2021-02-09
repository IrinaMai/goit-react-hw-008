import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';

const defaultMiddleware = getDefaultMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [...defaultMiddleware],
});

export default store;
