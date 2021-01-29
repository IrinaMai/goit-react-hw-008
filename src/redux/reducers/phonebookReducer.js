import { ADDCONTACT, ADDFILTER } from "../constant/phoneBookConst";

const initialState = {
    contactList: [],
    filter: '',
    alert: false,
}

const phonebookReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case ADDCONTACT:
            return { ...state, contactList: [...state.contactList, action.payload] };
        
        case ADDFILTER:
        return { ...state, filter: action.payload};

        default:
            return state;
    }

}
export default phonebookReducer;