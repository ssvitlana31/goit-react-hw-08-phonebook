import React from 'react';
import { useDispatch } from 'react-redux';

import { filterContacts } from 'redux/Contacts/contactsSlice';

import { FilterInput } from 'components/Form.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeValue = e => dispatch(filterContacts(e.target.value));
  return (
    <div>
      <FilterInput type="text" name="filter" onChange={onChangeValue} />
    </div>
  );
};
