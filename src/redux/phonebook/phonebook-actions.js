import { createAction } from '@reduxjs/toolkit';

const setFilter = createAction('contacts/filter');

const actions = {
  setFilter,
};
export default actions;
