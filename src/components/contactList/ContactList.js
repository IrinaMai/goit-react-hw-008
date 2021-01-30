import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { filterHndl, deletBtnHndl, addContact } from '../../redux/actions/phoneBookAction';
import { title, input, label, button, list, listItem, nameItem, filter } from './ContactList.module.css';
import fadeStyle from './fadeStyle.module.css';




const ContactList = ({ contactList, filterHndl, contacts, deletBtnHndl, addContact }) => {
        const onFilterChng = (e) => {
        filterHndl(e.target.value);
    }
    const onDeletBtn = (e) => {
        deletBtnHndl(e.target.id)
    }
    // useEffect(() => {
    // const lsList = localStorage.getItem('contacts')
    //     if (lsList) {
    //          addContact(JSON.parse(lsList))
    //     }
    // }, [])


    useEffect(() => {
       
        localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts])
    
    return (
        <>
             {(contacts.length > 2) && 
             <label className={label}>Search name:
             <input name="search" type="text" onChange={onFilterChng} className={input} />
             </label>}
 
            <h2 className={title}>Contact list </h2>
             <TransitionGroup component="ul" className={list}>
                {contactList.map(({ id, name, phone }) =>
                <CSSTransition
                timeout={250}
                classNames={fadeStyle}
                key={id}
                >
                    <li className={listItem} > 
                    <span className={nameItem}>{name} :</span>{phone}
                    <button type="button" onClick={onDeletBtn} id={id} className={button}>Delete</button>
                    </li>
                </CSSTransition>
            )}
        </TransitionGroup>
        </>
        
    );
}

const mapStateToProps = (state) => {
    return {
        contactList: state.contactList.filter(item => item.name.toLowerCase().includes(state.filter.toLowerCase())),
        filter: state.filter,
        contacts: state.contactList,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        filterHndl: (search) => dispatch(filterHndl(search)),
        deletBtnHndl: (dltId) => dispatch(deletBtnHndl(dltId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);