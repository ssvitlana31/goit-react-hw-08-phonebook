import {
  HeaderStyled,
  LogLinkStyled,
  LoginContStyled,
  NavLinkStyled,
  NavStyled,
} from 'components/Form.styled';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectLogin } from 'redux/selector';

const Sydebar = () => {
  const isLogin = useSelector(selectLogin);
  return (
    <HeaderStyled>
      <NavStyled>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        {isLogin && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
      </NavStyled>
      {isLogin ? (
        <UserMenu />
      ) : (
        <LoginContStyled>
          <LogLinkStyled to={'/login'}>Login</LogLinkStyled>
          <LogLinkStyled to={'/register'}>Registration</LogLinkStyled>
        </LoginContStyled>
      )}
    </HeaderStyled>
  );
};

export default Sydebar;
