// import { addContactError } from '../actions/phoneBookAction';

// export const checkNewContactMdlw = store => next => action => {
//   const state = store.getState();
//   if (action.type === '@phoneBook/addContactSuccess') {
//     if (
//       state.contactList.find(
//         ({ name }) => name.toLowerCase() == action.payload.name.toLowerCase(),
//       )
//     ) {
//       store.dispatch(addContactError('This name already exist'));
//       return;
//     }
//     if (state.contactList.find(({ phone }) => phone == action.payload.phone)) {
//       store.dispatch(addContactError('This phone belongs to another contact'));
//       return;
//     }
//     if (!action.payload.name || !action.payload.phone) {
//       store.dispatch(addContactError('All fields shuld be complited'));
//       return;
//     }
//   }
//   next(action);
// };
