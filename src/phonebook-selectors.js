import { createSelector } from '@reduxjs/toolkit';

const getEntities = state => state.contacts.items.entities;

const getFilter = state => state.contacts.filter;

const getFiltredContacts = createSelector(
  [getEntities, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getEntities,
  getFilter,
  getFiltredContacts,
};
