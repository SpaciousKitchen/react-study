import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import brandImg from './img/brand.png';

const BrandPage = () => {
  return (
    <>
      <HeaderContainer />

      <img src={brandImg} width="100%" />
    </>
  );
};

export default BrandPage;
