import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  box-shadow: 0 0 10px blue;
  gap: 20px;
  background-color: aliceblue;
  padding: 60px 40px;
  margin: 50px auto;
  border-radius: 15px;
  width: 450px;
  height: auto;
`;
export const LableStyled = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
`;
export const InputStyled = styled.input`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid lightblue;
`;
export const SpanStyled = styled.span`
  color: darkblue;
`;
export const StyledLink = styled.a`
  align-items: center;
  padding: 5px;
  font-size: 16px;
  font-weight: 700;
  color: darkblue;
  &:hover {
    color: lightblue;
  }
`;
export const TextStyled = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;
