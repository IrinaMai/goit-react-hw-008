import React from 'react';
import { connect } from "react-redux";
import {filterHndl} from '../../redux/actions/phoneBookAction'


const ContactList = ({contactItem, filterHndl}) => {
    const onFilterChng = (e) => {
        // filterHndl(e.target.value)
        console.log(filterHndl(e.target.value))
    }
    
    return (
        <>
            <label>Search name:
                 <input name="search" type="text" onChange={onFilterChng} />
            </label>
        <ul>
            {contactItem.map(({id, name, phone}) => <li key={id}>{name} : {phone} </li> )}
            </ul>
        </>
        
    );
}

const mapStateToProps = (state) => {
    return {
        contactItem: state.contactList,
        filter: state.filter,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        filterHndl: (search) => dispatch(filterHndl(search))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);