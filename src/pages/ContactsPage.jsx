import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { apiGetContacts } from '../redux/contacts/contactsSlice';
import {
  selectContactsError,
  selectContactsIsLoading,
} from '../redux/contacts/contactsSelectors';

import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { Loader } from 'components/Loader/Loader';
import { SearchFilter } from 'components/SearchFilter/SearchFilter';
import { ContactsList } from 'components/ContactsList/ContactsList';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && 'Error'}
      <AddContactForm />
      <SearchFilter />
      <ContactsList />
    </div>
  );
};

export default ContactsPage;
