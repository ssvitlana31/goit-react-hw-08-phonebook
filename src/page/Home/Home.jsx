import React from 'react';
import { useSelector } from 'react-redux';
import { selectLogin, selectUser } from 'redux/selector';

const Home = () => {
  const isLogin = useSelector(selectLogin);
  const { name } = useSelector(selectUser);
  return !isLogin ? (
    <div>
      <h1>Welcome to the convenient contacts application</h1>
      <img
        src="https://static8.depositphotos.com/1514637/993/i/600/depositphotos_9930253-stock-photo-phone-book.jpg"
        alt="phonebook"
      />
    </div>
  ) : (
    <div>
      <h1>Welcome {name} to your contacts application</h1>
      <img
        src="https://static8.depositphotos.com/1514637/993/i/600/depositphotos_9930253-stock-photo-phone-book.jpg"
        alt="phonebook"
      />
    </div>
  );
};

export default Home;
