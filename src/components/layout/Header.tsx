import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Logo onClick={() => navigate('/')}></Logo>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  background-color: #aae6a1;
  width: 450px;
  height: 50px;
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  margin-left: 20px;
  background-color: green;
  &:hover{
    cursor: pointer;
  }
`;

export default Header;
