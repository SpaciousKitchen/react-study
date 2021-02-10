import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, initializeForm, login } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';

import firebase from 'firebase';

import { tempSetUser } from '../../modules/user';

const LoginForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));
  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };
  const onClickGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        dispatch(
          tempSetUser({
            id: result.additionalUserInfo.profile.id,
            username: result.additionalUserInfo.profile.name,
            option: 'google',
          }),
        );
      });
  };
  const onClickKaKao = () => {
    window.Kakao.Auth.login({
      success: function (authObj) {
        window.Kakao.Auth.setAccessToken(authObj.access_token);
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: function (response) {
            dispatch(
              tempSetUser({
                id: response.id,
                username: response.properties.nickname,
                option: 'kakao',
              }),
            );
          },
          fail: function (error) {
            console.log(error);
          },
        });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
    dispatch(login({ username, password }));
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('오류 발생');
      console.log(authError);
      setError('로그인 실패');
      return;
    }
    if (auth) {
      console.log('로그인 성공');
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      history.push('/');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [history, user]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      onClickGoogle={onClickGoogle}
      onClickKaKao={onClickKaKao}
      error={error}
    />
  );
};

export default withRouter(LoginForm);
