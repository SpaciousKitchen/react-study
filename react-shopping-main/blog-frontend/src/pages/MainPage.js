import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import mainImg from './img/main.png';

const MainPage = () => {
  return (
    <>
      <HeaderContainer />
      <img src={mainImg} width="100%" />
    </>
  );
};

export default MainPage;
