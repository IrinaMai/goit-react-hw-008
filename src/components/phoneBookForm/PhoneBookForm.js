import React, { useState } from 'react';
import { connect } from "react-redux";
import {addContact} from "../../redux/actions/phoneBookAction"


const initialState = {
    name: '',
    phone: '',
}

const PhoneBookForm = ({addContact}) => {
    const [contact, setContact] = useState({...initialState});

    const onContactSubmit = (e) => {
        e.preventDefault();
        // console.log(contact)
        addContact(contact)
        setContact({...initialState})
    }
    const onInputChng = (e) => {
        const { name, value } = e.target;
        setContact(prev => ({ ...prev, [name]: value }));
   
    };

    
    return (
        <>
            <form onSubmit={onContactSubmit}>
                <label>Name:
                 <input name="name" value={contact.name} onChange={onInputChng}/>
                </label>
                 <label>Number:
                 <input name="phone" value={contact.phone} onChange={onInputChng}/>
                </label>
                <button type="submit">Add Contact</button>
            </form>
        </>
        
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        addContact: (contact) => dispatch(addContact(contact))
    }
}

export default connect(null, mapDispatchToProps)(PhoneBookForm);