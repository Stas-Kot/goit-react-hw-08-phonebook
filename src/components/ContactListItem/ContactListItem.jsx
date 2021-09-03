import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { ContactItem, DeleteDiv } from './ContactListItem.styles';

export default function ContactListItem({ name, number, deleteContact }) {
  return (
    <ContactItem>
      {name}: {number}
      <DeleteDiv>
        <Button variant="outline-danger" type="button" onClick={deleteContact}>
          Delete
        </Button>
      </DeleteDiv>
    </ContactItem>
  );
}

ContactListItem.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
