import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from 'components/Form.styled';
import { loginThunk } from 'redux/Auth/operations';

import {
  FormStyled,
  InputStyled,
  LableStyled,
  SpanStyled,
  StyledLink,
  TextStyled,
} from 'page/Register/Register.styled';
import { useNavigate } from 'react-router-dom';

const userLogjn = {
  email: '',
  password: '',
};

const Login = () => {
  const [user, setUser] = useState(userLogjn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginThunk(user));
    setUser(userLogjn);
  };
  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <LableStyled>
          <SpanStyled>Email</SpanStyled>
          <InputStyled
            type="email"
            name="email"
            value={user.email}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </LableStyled>
        <LableStyled>
          <SpanStyled>Password</SpanStyled>
          <InputStyled
            type="password"
            name="password"
            value={user.password}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title=""
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </LableStyled>
        <Button type="submit">Login</Button>
      </FormStyled>
      <TextStyled>
        You dont have account?
        <StyledLink
          href=" "
          onClick={() => {
            navigate('/register');
          }}
        >
          Create an Account
        </StyledLink>
      </TextStyled>
    </>
  );
};

export default Login;
