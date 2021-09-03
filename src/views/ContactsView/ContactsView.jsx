import ContactList from 'components/ContactList/ContactList';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import SearchContact from 'components/SearchContact/SearchContact';

export default function ContactsView() {
  return (
    <>
      <h1>Phonebook</h1>
      <PhonebookForm />

      <h2>Contacts</h2>
      <SearchContact />
      <ContactList />
    </>
  );
}
