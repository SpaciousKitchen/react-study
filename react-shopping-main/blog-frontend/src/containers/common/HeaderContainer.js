import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/common/Header';
import { logout } from '../../modules/user';
import NavigationBar from '../../components/common/NavigationBar';
import firebase from 'firebase';
const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));

  const dispatch = useDispatch();
  const onLogout = () => {
    if (user?.option === 'google') {
      //구글 인증 로그아웃
      firebase
        .auth()
        .signOut()
        .then(() => {})
        .catch((error) => {
          // An error happened.
        });
    } else if (user?.option === 'kakao') {
      window.Kakao.Auth.logout(function () {
        //카카오 로그인 로그아웃
        console.log(window.Kakao.Auth.getAccessToken());
      });
    }
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
