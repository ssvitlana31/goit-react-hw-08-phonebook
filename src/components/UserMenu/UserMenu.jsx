import React from 'react';
import { Button } from 'components/Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/selector';
import styled from 'styled-components';
import { logoutThunk } from 'redux/Auth/operations';

const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <h4>{name}</h4>
      <Button type="button" onClick={() => dispatch(logoutThunk())}>
        Logout
      </Button>
    </Wrapper>
  );
};

export default UserMenu;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
