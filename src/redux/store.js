import {configureStore} from '@reduxjs/toolkit'
// import phonebookReducer from './reducers/phonebookReducer';
import { phBookReducer  } from "./reducers/phonebookReducer";

const store = configureStore({
    reducer: phBookReducer,
})

 export default store;


// ==============================================================
// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'
// import {configureStore} from '@reduxjs/toolkit'
// import phonebookReducer from './reducers/phonebookReducer';


// const store = createStore(phonebookReducer, composeWithDevTools());

// export default store;