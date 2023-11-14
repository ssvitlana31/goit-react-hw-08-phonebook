import React from 'react';
import { Link } from 'react-router-dom';

import { NotFoundImgStyled, NotFoundStyled } from './NotFound.styled';

const NotFound = () => {
  return (
    <NotFoundStyled>
      <NotFoundImgStyled
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP_bzRALWm1tRV0WABnubYoUcC2U04JoOhC-LozJCIqk2UoOgvlcRtwQPt5SPwlVz3ZmA&usqp=CAU"
        alt="error"
      />
      <h2>
        You can go to <Link to="/">Home</Link>
      </h2>
    </NotFoundStyled>
  );
};

export default NotFound;
