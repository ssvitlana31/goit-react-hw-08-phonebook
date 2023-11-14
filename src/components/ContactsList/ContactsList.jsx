import { useDispatch, useSelector } from 'react-redux';

import { deleteContactThunk } from 'redux/Contacts/operations';
import { selectContacts, selectFilter } from 'redux/selector';

import { ContactItem, ContactList, DeleteButton } from 'components/Form.styled';

export const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContactThunk(id));
  };

  const getFilteredContacts = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ContactList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name} {number}
          <DeleteButton onClick={() => handleDelete(id)}>Delete</DeleteButton>
        </ContactItem>
      ))}
    </ContactList>
  );
};
