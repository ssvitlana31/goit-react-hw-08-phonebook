import { Filter } from 'components/Filter/Filter';
import { Container, Title } from 'components/Form.styled';
import { InputContacts } from 'components/InputContacts/InputContacts';
import { Loader } from 'components/Loader/Loader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'redux/Contacts/operations';
import { selectLoader, selectLogin, selectUser } from 'redux/selector';

const Contacts = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoader);
  const isLogin = useSelector(selectLogin);
  const { name } = useSelector(selectUser);

  useEffect(() => {
    isLogin && dispatch(fetchContactsThunk());
  }, [dispatch, isLogin]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <h2>Welcome {name} to your contacts application</h2>

      <InputContacts />

      <h2>Contacts</h2>
      <Filter />
      {!loading ? <Contacts /> : <Loader />}
    </Container>
  );
};
