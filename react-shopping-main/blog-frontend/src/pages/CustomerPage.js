import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import customerImg from './img/customer.png';
const CustomerPage = () => {
  return (
    <>
      <HeaderContainer />
      <img src={customerImg} width="100%" />
    </>
  );
};

export default CustomerPage;
