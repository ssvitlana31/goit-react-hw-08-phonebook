import React from 'react';
import { Link } from 'react-router-dom';

import { NotFoundImgStyled, NotFoundStyled } from './NotFound.styled';

const NotFound = () => {
  return (
    <NotFoundStyled>
      <NotFoundImgStyled
        src="https://web-promo.ua/wp-content/uploads/2021/06/pexels-alleksana-4271933.jpg"
        alt="error"
      />
      <h2>
        You can go to <Link to="/">Home</Link>
      </h2>
    </NotFoundStyled>
  );
};

export default NotFound;
