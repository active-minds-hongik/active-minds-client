import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Logo onClick={() => navigate('/')}>로고</Logo>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  background-color: beige;
  width: 450px;
  height: 50px;
`;

const Logo = styled.button`
  width: 50px;
  height: 50px;
  background-color: pink;
  margin-left: 20px;
`;

export default Header;
