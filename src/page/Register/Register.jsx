import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from 'components/Form.styled';
import { registerThunk } from 'redux/Auth/operations';

import {
  FormStyled,
  InputStyled,
  LableStyled,
  SpanStyled,
} from './Register.styled';

const userRegister = {
  name: '',
  email: '',
  password: '',
};
const Register = () => {
  const [user, setUser] = useState(userRegister);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerThunk(user));
    setUser(userRegister);
  };
  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <LableStyled>
        <SpanStyled> Name</SpanStyled>
        <InputStyled
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </LableStyled>
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
      <Button type="submit">Sign Up</Button>
    </FormStyled>
  );
};

export default Register;
