import { ContactsListItem } from '../ContactsListItem/ContactsListItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/contactsSelectors';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactsListItem key={contact.id} contacts={contact} />
      ))}
    </ul>
  );
};
