import React, { useState, useEffect} from 'react';
import { connect } from "react-redux";
import { CSSTransition } from 'react-transition-group';
import { addContact } from "../../redux/actions/phoneBookAction";
import { title, button, input, label, alert, alertMessage } from './PhoneBookForm.module.css';
import fadeStyled from './fade.module.css'


const initialState = {
    name: '',
    phone: '',
    alert: false,
    allertMSG: ''

}

const PhoneBookForm = ({ addContact, contactList }) => {
    const [contact, setContact] = useState({ ...initialState });

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contactList))
    }, [contactList])

    const onContactSubmit = (e) => {
        e.preventDefault();
        if (contactList.some(({ name }) => contact.name === name)) {
            setContact(prev => ({ ...prev, alert: !prev.alert, allertMSG: 'This name already exist' }));
            setTimeout(()=>(setContact(prev => ({ ...prev, alert: !prev.alert, allertMSG: '' }))), 1500)
            return
        }
        if (contactList.some(({ phone }) => contact.phone === phone )) {
            setContact(prev => ({ ...prev, alert: !prev.alert, allertMSG: 'This number already belongs to other contact' }));
            setTimeout(() => (setContact(prev => ({ ...prev, alert: !prev.alert, allertMSG: '' }))), 1500);
            return
        } else {
            addContact(contact);
            setContact({ ...initialState });
        }
        
    }
    const onInputChng = (e) => {
        const { name, value } = e.target;
        setContact(prev => ({ ...prev, [name]: value }));
   
    };
    
 
    
    return (
        <>
            <h2 className={title}>Phonebook</h2>

            <CSSTransition
                in={contact.alert}
                timeout={250}
                unmountOnExit
                classNames={fadeStyled}
            >
                <div className={alert}>
                    <p className={alertMessage}>{contact.allertMSG}</p>
                </div>
            </CSSTransition>


            <form onSubmit={onContactSubmit}>
                <label className={label}>Name:
                 <input name="name" value={contact.name} onChange={onInputChng} className={input} />
                </label>
                <label className={label}>Number:
                 <input name="phone" value={contact.phone} onChange={onInputChng} className={input} />
                </label>
                <button type="submit" className={button}>Add Contact</button>
            </form>
        </>
        
    );
};

const mapStateToProps = (state) => {
    return {
        alert: state.alert,
        contactList: state.contactList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addContact: (contact) => dispatch(addContact(contact))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBookForm);
