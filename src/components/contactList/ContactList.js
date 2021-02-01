import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { filterHndl, deletBtnHndl, getContactFromLS} from '../../redux/actions/phoneBookAction';
import { title, input, label, button, list, listItem, nameItem, filter } from './ContactList.module.css';
import fadeStyle from './fadeStyle.module.css';


const ContactList = ({ showList, filterHndl, contacts, deletBtnHndl, getContactFromLS }) => {
      useEffect(() => {
        if (localStorage.getItem('contacts')) {
            const listLS = localStorage.getItem('contacts');
            getContactFromLS(JSON.parse(listLS));
        }
    }, [])

    const onFilterChng = (e) => {
        filterHndl(e.target.value);
    };

    const onDeletBtn = (e) => {
        deletBtnHndl(e.target.id);
            
    };

    
    return (
        <>
             {(contacts.length > 2) && 
             <label className={label}>Search name:
             <input name="search" type="text" onChange={onFilterChng} className={input} />
             </label>}
 
            <h2 className={title}>Contact list </h2>
             <TransitionGroup component="ul" className={list}>
                {showList.map(({ id, name, phone }) =>
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
// const getValue = (showList) => {
//     return (showList.length > 1) ? state.filter : ''
// }

const mapStateToProps = (state) => {
    return {
        showList: state.contactList.filter(item => item.name.toLowerCase().includes(state.filter.toLowerCase())),
        // filter: (contactList.length >1) ? state.filter : '',
        // filter: getValue(state),
        filter: state.filter,
        contacts: state.contactList,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        filterHndl: (search) => dispatch(filterHndl(search)),
        deletBtnHndl: (dltId) => dispatch(deletBtnHndl(dltId)),
        getContactFromLS: (listLS) => dispatch(getContactFromLS(listLS))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);