import { useState } from 'react';
import { toast } from 'react-toastify';
import { Form, BtnAddContact, Input } from './PhonebookForm.styles';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/phonebook/phonebook-operations';
import selectors from 'redux/phonebook/phonebook-selectors';

export default function PhonebookForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectors.getFiltredContacts);
  const dispatch = useDispatch();

  const handleSetUserInfo = e => {
    switch (e.target.name) {
      case 'name':
        return setName(e.target.value);

      case 'number':
        return setNumber(e.target.value);

      default:
        return;
    }
  };

  const handleAddContact = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      toast.error(`${name} is already in contacts`);
      reset();
      return;
    }
    dispatch(addContact({ name, number }));
    toast.success(`New contact ${name} added`);

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form autocomplete="off" onSubmit={handleAddContact}>
      <label>
        <p>Name</p>
        <Input
          onChange={handleSetUserInfo}
          value={name}
          type="text"
          name="name"
          autocomplete="off"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label>
        <p>Number</p>
        <Input
          onChange={handleSetUserInfo}
          value={number}
          type="tel"
          name="number"
          autocomplete="off"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <BtnAddContact type="submit">Add contact</BtnAddContact>
    </Form>
  );
}
