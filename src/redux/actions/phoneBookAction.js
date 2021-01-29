import { v4 as uuidv4 } from 'uuid';
import {ADDCONTACT, ADDFILTER } from '../constant/phoneBookConst'



const addContact = (contact) => ({
    type: ADDCONTACT,
    payload: { ...contact, id: uuidv4() }
});

const filterHndl = (search) => ({
    type: ADDFILTER,
    payload: search
})

export {addContact, filterHndl} ;