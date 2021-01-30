import { v4 as uuidv4 } from 'uuid';
// import {ADDCONTACT, ADDFILTER, DELETECONTACT } from '../constant/phoneBookConst'
import { createAction } from '@reduxjs/toolkit';

const filterHndl = createAction("@phoneBook/addFilter");
const deletBtnHndl = createAction("@phoneBook/dltContact");
const addContact = createAction("@phoneBook/addContact", (contact) => ({
    payload: { ...contact, id: uuidv4() }
}));

export {addContact, filterHndl, deletBtnHndl} ;

// const addContact = (contact) => ({
//     type: ADDCONTACT,
//     payload: { ...contact, id: uuidv4() }
// });

// const filterHndl = (search) => ({
//     type: ADDFILTER,
//     payload: search
// })

// const deletBtnHndl = (dltId) => ({
//     type: DELETECONTACT,
//     payload: dltId
// })

// export {addContact, filterHndl, deletBtnHndl} ;