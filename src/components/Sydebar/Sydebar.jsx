import { HeaderStyled, NavLinkStyled, NavStyled } from 'components/Form.styled';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';

const Sydebar = () => {
  return (
    <HeaderStyled>
      <NavStyled>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
      </NavStyled>
      <UserMenu />
    </HeaderStyled>
  );
};

export default Sydebar;
