import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';

import { SpanStyle } from './MenuSpan';
const NavigationBlock = styled.div`
  position: relative;
  z-index: 10;
  border-top: 1.5px solid #ddd;
  overflow: hidden;
  text-align: center;
`;

const NavBlock = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 컨텐츠가 4rem 아래 나타나도록 해주는 컴포넌트
 */
const Spacer = styled.div`
  height: 4rem;
`;

const Header = ({ user, onLogout }) => {
  return (
    <>
      <NavigationBlock>
        <NavBlock>
          <ul>
            <Link to="/">
              <SpanStyle>홈</SpanStyle>
            </Link>
          </ul>
          <ul>
            <Link to="/brand">
              <SpanStyle>브랜드</SpanStyle>
            </Link>
          </ul>
          <ul>
            <Link to="/category">
              <SpanStyle>카테고리</SpanStyle>
            </Link>
          </ul>
          <ul>
            <Link to="/customer">
              <SpanStyle>고객센터</SpanStyle>
            </Link>
          </ul>
        </NavBlock>
      </NavigationBlock>
      <Spacer />
    </>
  );
};

export default Header;
