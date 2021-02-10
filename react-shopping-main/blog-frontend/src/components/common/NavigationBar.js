import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';

const NavigationBlock = styled.div`
  position: relative;
  z-index: 10;
  border-top: 1px solid #ddd;

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
            <Link>
              <span>홈</span>
            </Link>
          </ul>
          <ul>
            <Link>
              <span>브랜드</span>
            </Link>
          </ul>
          <ul>
            <Link>
              <span>카테고리</span>
            </Link>
          </ul>
          <ul>
            <Link>
              <span>고객센터</span>
            </Link>
          </ul>
        </NavBlock>
      </NavigationBlock>
      <Spacer />
    </>
  );
};

export default Header;
