import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Section from './Section';
import { Container } from './App.styled';
import Notification from './Notification';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchContacts, addContact } from "../redux/contacts/contacts-operations";
import { getContacts } from "../redux/contacts/contacts-selectors";
import { useDispatch } from 'react-redux';
// import {
//   useGetContactsQuery,
//   useCreateContactMutation,
// } from '../redux/contacts/contactApi';

export default function App() {
  // const { data: contacts } = useGetContactsQuery();
  // const [createContact] = useCreateContactMutation();

  const dispatch = useDispatch();

  // console.log(fetchContacts)
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getContacts);
  // console.log(contacts)

  const onAddContact = (contact) => {
    const action = addContact(contact);
    dispatch(action);
}


  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm contacts={contacts} createContact={onAddContact} />
      </Section>
      <Section title="Contacts">
        {contacts && contacts.length > 0 && <Filter />}
        {contacts && contacts.length > 0 ? (
          <ContactList contacts={contacts} />
        ) : (
          <Notification message="Your contactlist is empty" />
        )}
      </Section>
    </Container>
  );
}
