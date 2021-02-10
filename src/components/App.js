import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsFromDB } from '../redux/operations/phBookOperation';
import Navigation from './navigation/Navigation';

function App() {
  const localId = useSelector(state => state.registration.localId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localId) {
      return;
    }
    dispatch(getContactsFromDB());
  }, [dispatch, localId]);

  return <Navigation />;
}

export default App;
