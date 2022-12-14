import React from 'react';
import { Span, Item, Btn } from './ContactListItem.styled';
import { removeContact } from '../../redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';
// import { getIsLoading } from '../../redux/contacts/contacts-selectors';
// import { useSelector } from 'react-redux';

const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  // const isDeliting = useSelector(getIsLoading);

  const onRemoveContact = id => {
    const action = removeContact(id);
    dispatch(action);
  };

  return (
    <Item key={id}>
      <Span></Span>
      {name}: {phone}
      <Btn
        type="button"
        // disabled={isDeliting}
        onClick={() => onRemoveContact(id)}
      >Delete
        {/* {isDeliting ? 'Deliting...' : 'Delete'} */}
      </Btn>
    </Item>
  );
};

export default ContactListItem;
