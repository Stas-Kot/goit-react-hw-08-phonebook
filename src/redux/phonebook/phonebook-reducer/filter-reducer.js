import { createReducer } from '@reduxjs/toolkit';
import actions from '../phonebook-actions';

const filterReducer = createReducer('', {
  [actions.setFilter]: (_, { payload }) => payload,
});

export default filterReducer;
