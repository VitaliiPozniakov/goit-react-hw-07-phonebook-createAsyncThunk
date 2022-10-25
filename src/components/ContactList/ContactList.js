import React from 'react';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts/selectors';
import ContactListItem from '../ContactListItem';

const ContactList = ({ contacts }) => {
  const filter = useSelector(getFilter);

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      )
    );
  };

  const visibleContacts = filtredContacts();

  return (
    <List>
      {visibleContacts.map(visibleContact => (
        <ContactListItem key={visibleContact.id} {...visibleContact} />
      ))}
    </List>
  );
};

export default ContactList;
