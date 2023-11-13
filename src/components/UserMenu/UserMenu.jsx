import React from 'react';
import { LogLinkStyled, LoginContStyled } from 'components/Form.styled';

const UserMenu = () => {
  return (
    <LoginContStyled>
      <LogLinkStyled to={'/login'}>Login</LogLinkStyled>
      <LogLinkStyled to={'/register'}>Registration</LogLinkStyled>
    </LoginContStyled>
  );
};

export default UserMenu;
