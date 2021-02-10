import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import BrandPage from './pages/BrandPage';
import CategoryPage from './pages/CategoryPage';
import CustomerPage from './pages/CustomerPage';
import { Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <>
      <Helmet>
        <title>REACTET-SHOP</title>
      </Helmet>
      <Route component={MainPage} path={['/main', '/']} exact />
      <Route component={BrandPage} path="/brand" />
      <Route component={CategoryPage} path="/category" />
      <Route component={CustomerPage} path="/customer" />

      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
    </>
  );
};
export default App;
