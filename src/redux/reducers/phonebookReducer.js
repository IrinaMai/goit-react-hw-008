// import { ADDCONTACT, ADDFILTER, DELETECONTACT, } from "../constant/phoneBookConst";
import { createReducer } from '@reduxjs/toolkit';
import {addContact, filterHndl, deletBtnHndl, getContactFromLS} from "../actions/phoneBookAction";

const initialState = {
    contactList: [],
    filter: '',
}

export const phBookReducer = createReducer({...initialState}, {
    [addContact]: (state, action) => {
        localStorage.setItem('contacts', JSON.stringify([...state.contactList, action.payload]))
    return { ...state, contactList: [...state.contactList, action.payload]
        }
    },
    
    [getContactFromLS]: (state, action) => ({ ...state, contactList: [...action.payload] }),
    
    [filterHndl]: (state, action) => ({ ...state, filter: action.payload }),

    [deletBtnHndl]: (state, action) => {
        localStorage.setItem('contacts', JSON.stringify([...state.contactList.filter(({ id }) => id !== action.payload)]))
    return { ...state, contactList: [...state.contactList.filter(({ id }) => id !== action.payload)]
    }},
})





// const phonebookReducer = (state = { ...initialState }, action) => {
//     switch (action.type) {
//         case addContact.type:
//             return { ...state, contactList: [...state.contactList, action.payload] };
        
//         case filterHndl.type:
//             return { ...state, filter: action.payload };
        
//         case deletBtnHndl.type:
//             return { ...state, contactList: [...state.contactList.filter(({id}) => id!==action.payload)]};

//         default:
//             return state;
//     }

// }
// export default phonebookReducer;