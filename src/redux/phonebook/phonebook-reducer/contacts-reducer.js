import { combineReducers } from 'redux';
import filterReducer from './filter-reducer';
import { entities, loading, error } from './items-reducer';
// import itemsReducer from 'redux/phonebook/phonebook-reducer/items-reducer';

const itemsReducer = combineReducers({
  entities,
  loading,
  error,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
