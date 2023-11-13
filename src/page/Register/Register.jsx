import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { FormStyled, InputStyled, LableStyled } from './Register.styled';
import { Button } from 'components/Form.styled';
import { registerThunk } from 'redux/Auth/operations';

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
        <span> Name</span>
        <InputStyled
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </LableStyled>
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
      <Button type="submit">Sign Up</Button>
    </FormStyled>
  );
};

export default Register;
