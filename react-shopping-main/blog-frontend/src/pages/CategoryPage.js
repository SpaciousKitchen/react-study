import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import categoryImg from './img/category.png';
const CategoryPage = () => {
  return (
    <>
      <HeaderContainer />
      <img src={categoryImg} width="100%" />
    </>
  );
};

export default CategoryPage;
