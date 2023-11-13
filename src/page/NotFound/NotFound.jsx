import React from 'react';
import { Link } from 'react-router-dom';

import { NotFoundImgStyled, NotFoundStyled } from './NotFound.styled';

const NotFound = () => {
  return (
    <NotFoundStyled>
      <NotFoundImgStyled
        src="https://st5.depositphotos.com/2466369/66485/v/450/depositphotos_664857908-stock-illustration-page-not-found-concept-with.jpg."
        alt="error"
      />
      <h2>
        You can go to <Link to="/">Home</Link>
      </h2>
    </NotFoundStyled>
  );
};

export default NotFound;
