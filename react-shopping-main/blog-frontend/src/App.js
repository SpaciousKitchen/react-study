import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import BrandPage from './pages/BrandPage';
import CategoryPage from './pages/CategoryPage';
import CustomerPage from './pages/CustomerPage';
import { Helmet } from 'react-helmet-async';
import firebaseConfig from './firebase'; //firebaseSetting

window.Kakao.init('24e416865b3c2c4dd6dcaa165c152b77');
window.Kakao.isInitialized();

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
