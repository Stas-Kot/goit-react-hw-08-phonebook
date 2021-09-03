import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'api/api.js';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await api.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (item, { rejectWithValue }) => {
    try {
      const result = await api.postContact(item);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  // {
  //   condition: (item, { getState }) => {
  //     const { contacts } = getState();
  //     const state = contacts.items.entities;
  //     if (state.find(savedContact => savedContact.name === item.name)) {
  //       alert(`${item.name} is already in contacts`);
  //       return false;
  //     }
  //   },
  // },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
