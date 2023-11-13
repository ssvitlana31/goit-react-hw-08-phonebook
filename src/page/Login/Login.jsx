import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  FormStyled,
  InputStyled,
  LableStyled,
} from 'page/Register/Register.styled';
import { Button } from 'components/Form.styled';
import { loginThunk } from 'redux/Auth/operations';

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
        <span>Email</span>
        <InputStyled
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </LableStyled>
      <LableStyled>
        <span>Password</span>
        <InputStyled
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Enter your password"
        />
      </LableStyled>
      <Button type="submit">Login</Button>
    </FormStyled>
  );
};

export default Login;
