import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from 'components/Form.styled';
import { loginThunk } from 'redux/Auth/operations';

import {
  FormStyled,
  InputStyled,
  LableStyled,
  SpanStyled,
} from 'page/Register/Register.styled';

const userLogjn = {
  email: '',
  password: '',
};

const Login = () => {
  const [user, setUser] = useState(userLogjn);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginThunk(user));
    setUser(userLogjn);
  };
  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <LableStyled>
        <SpanStyled>Email</SpanStyled>
        <InputStyled
          type="email"
          name="email"
          value={user.email}
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
          onChange={handleChange}
          placeholder="Enter your password"
        />
      </LableStyled>
      <Button type="submit">Login</Button>
    </FormStyled>
  );
};

export default Login;
