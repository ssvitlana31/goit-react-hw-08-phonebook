import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Filter } from 'components/Filter/Filter';
import { InputContacts } from 'components/InputContacts/InputContacts';
import { Loader } from 'components/Loader/Loader';
import { Contacts } from 'components/ContactsList/ContactsList';

import { fetchContactsThunk } from 'redux/Contacts/operations';
import { selectLoader, selectLogin, selectUser } from 'redux/selector';

import { Container, Title } from 'components/Form.styled';
import {
  ContactsTitleStaled,
  ContainerContactsStyled,
} from './ContactsPageStyled';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoader);
  const isLogin = useSelector(selectLogin);
  const { name } = useSelector(selectUser);

  useEffect(() => {
    isLogin && dispatch(fetchContactsThunk());
  }, [dispatch, isLogin]);

  return (
    <ContainerContactsStyled>
      <ContactsTitleStaled>
        Welcome {name} to your contacts application
      </ContactsTitleStaled>
      <Container>
        <Title>Phonebook</Title>
        <InputContacts />
        <ContactsTitleStaled>Contacts</ContactsTitleStaled>
        <Filter />
        {!loading ? <Contacts /> : <Loader />}
      </Container>
    </ContainerContactsStyled>
  );
};

export default ContactsPage;
