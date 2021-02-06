import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { filterClear, filterHndl } from '../../redux/actions/phoneBookAction';
import Loader from 'react-loader-spinner';
import { deleteContactById } from '../../redux/operations/phBookOperation';
import {
  filteredList,
  getConctactList,
  getIsLoading,
} from '../../redux/selectors/phBookSelectors';
import {
  title,
  input,
  label,
  button,
  list,
  listItem,
  nameItem,
  filter,
  loader,
} from './ContactList.module.css';
import fadeStyle from './fadeStyle.module.css';

const ContactList = () => {
  const isLoading = useSelector(getIsLoading);
  const myList = useSelector(filteredList);
  const contactList = useSelector(getConctactList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterClear());
  }, [contactList.length <= 2]);

  const onFilterChng = e => {
    dispatch(filterHndl(e.target.value));
  };

  const onDeletBtn = e => {
    dispatch(deleteContactById(e.target.id));
  };

  return (
    <>
      {contactList.length > 2 && (
        <label className={label}>
          Search name:
          <input
            name="search"
            type="text"
            onChange={onFilterChng}
            className={input}
            value={filter}
          />
        </label>
      )}

      <h2 className={title}>Contact list </h2>
      {isLoading && (
        <Loader
          type="TailSpin"
          color="#6699FF"
          height={30}
          width={30}
          className={loader}
        />
      )}
      <TransitionGroup component="ul" className={list}>
        {myList.map(({ id, name, phone }) => (
          <CSSTransition timeout={250} classNames={fadeStyle} key={id}>
            <li className={listItem}>
              <span className={nameItem}>{name} :</span>
              {phone}
              <button
                type="button"
                onClick={onDeletBtn}
                id={id}
                className={button}
              >
                Delete
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

export default ContactList;
