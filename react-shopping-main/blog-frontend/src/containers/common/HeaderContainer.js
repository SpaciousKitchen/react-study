import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/common/Header';
import { logout } from '../../modules/user';
import NavigationBar from '../../components/common/NavigationBar';
const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <Header user={user} onLogout={onLogout} />
      <NavigationBar />
    </>
  );
};

export default HeaderContainer;
