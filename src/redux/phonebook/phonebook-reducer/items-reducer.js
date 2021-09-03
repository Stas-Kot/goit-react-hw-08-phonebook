import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'redux/phonebook/phonebook-operations';

export const entities = createReducer([], {
  [fetchContacts.pending]: () => [],
  [fetchContacts.fulfilled]: (_, { payload }) => [...payload],
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

export const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
});

// import { createSlice } from '@reduxjs/toolkit';

// import {
//   fetchContacts,
//   addContact,
//   deleteContact,
// } from 'redux/phonebook/phonebook-operations';

// const itemsSlice = createSlice({
//   name: 'items',
//   initialState: { entities: [], loading: false, error: null },
//   extraReducers: {
//     [fetchContacts.fulfilled]: (state, { payload }) => {
//       state.entities = payload;
//       state.loading = false;
//       state.error = null;
//     },
//     [fetchContacts.pending]: (state, _) => {
//       state.entities = [];
//       state.loading = true;
//       state.error = null;
//     },
//     [fetchContacts.rejected]: (state, { payload }) => {
//       state.entities = [];
//       state.loading = false;
//       state.error = payload;
//     },
//     [addContact.fulfilled]: (state, { payload }) => {
//       state.entities = [...state.entities, payload];
//       state.loading = false;
//       state.error = null;
//     },
//     [addContact.pending]: (state, _) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [addContact.rejected]: (state, { payload }) => {
//       state.loading = false;
//       state.error = payload;
//     },
//     [deleteContact.fulfilled]: (state, { payload }) => {
//       state.entities = state.entities.filter(({ id }) => id !== payload);
//     },
//     [deleteContact.pending]: (state, _) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [deleteContact.rejected]: (state, { payload }) => {
//       state.loading = false;
//       state.error = payload;
//     },
//   },
// });

// export default itemsSlice.reducer;
