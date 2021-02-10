import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { phBookReducer } from './phonebookReducer';
import { registrationReducer } from './registrationReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['email', 'idToken', 'isAuth', 'localId'],
};

const rootReducer = combineReducers({
  registration: persistReducer(authPersistConfig, registrationReducer),
  phoneBook: phBookReducer,
});

export default rootReducer;
