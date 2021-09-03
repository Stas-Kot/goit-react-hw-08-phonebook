import PropTypes from 'prop-types';
import actions from 'redux/phonebook/phonebook-actions';
import { SearchTitle, Label } from './SearchContact.styles';
import { useSelector, useDispatch } from 'react-redux';
import selectors from 'redux/phonebook/phonebook-selectors';

export default function SearchContact() {
  const value = useSelector(selectors.getFilter);
  const dispatch = useDispatch();

  return (
    <Label>
      <SearchTitle>Find contacts by name</SearchTitle>
      <input
        type="text"
        value={value}
        onChange={e => dispatch(actions.setFilter(e.target.value))}
      />
    </Label>
  );
}
SearchContact.propTypes = {
  value: PropTypes.string,
};
