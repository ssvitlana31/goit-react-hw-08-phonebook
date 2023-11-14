import React from 'react';
import { useSelector } from 'react-redux';
import { selectLogin, selectUser } from 'redux/selector';
import { HomeImgStyled, HomeTitleStaled } from './Home.styled';

const Home = () => {
  const isLogin = useSelector(selectLogin);
  const { name } = useSelector(selectUser);
  return !isLogin ? (
    <div>
      <HomeTitleStaled>
        Welcome to the convenient contacts application
      </HomeTitleStaled>
      <HomeImgStyled
        src="https://static8.depositphotos.com/1514637/993/i/600/depositphotos_9930253-stock-photo-phone-book.jpg"
        alt="phonebook"
      />
    </div>
  ) : (
    <div>
      <HomeTitleStaled>
        Welcome {name} to your contacts application
      </HomeTitleStaled>
      <HomeImgStyled
        src="https://static8.depositphotos.com/1514637/993/i/600/depositphotos_9930253-stock-photo-phone-book.jpg"
        alt="phonebook"
      />
    </div>
  );
};

export default Home;
