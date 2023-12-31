import { Link, NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightlavender;
  box-shadow: 0 0 10px blue;
  border-radius: 15px;
  width: 500px;
  height: auto;
  margin: 0 auto;
  margin-top: 50px;
`;
export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  padding: 20px 60px;
  height: 80px;
  background-color: lightblue;
  color: white;
  font-size: x-large;
`;
export const NavStyled = styled.nav`
  display: flex;
  gap: 20px;
`;
export const NavLinkStyled = styled(NavLink)``;
export const Title = styled.h1`
  font-size: 30px;
  color: darkblue;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 20px;
`;

export const Label = styled.label`
  font-size: 20px;
  color: darkblue;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid lightblue;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: darkblue;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
    color: darkblue;
  }
`;

export const FilterInput = styled.input`
  padding: 8px;
  border: 1px solid lightblue;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  width: 100%;
  color: darkblue;
`;

export const DeleteButton = styled.button`
  padding: 8px 16px;
  border: none;
  background-color: blue;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  margin-left: 20px;
`;

export const LogLinkStyled = styled(Link)`
  text-decoration: none;
  display: block;
  cursor: pointer;
  position: relative;
  padding: 10px 20px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #fff;
  transition: all 0.2s ease-in;
  &:hover {
    color: darkblue;
  }
`;
export const LoginContStyled = styled.div`
  display: flex;
  gap: 30px;
`;

export const StyledHeaderWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;
export const StyledNav = styled.nav`
  display: flex;
  padding: 20px;
  background: darkblue;
`;
export const LoaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150vh;
`;
