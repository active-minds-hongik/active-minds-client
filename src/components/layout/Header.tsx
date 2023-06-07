import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Logo onClick={() => navigate('/')}>AM</Logo>
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
  color: white;
  font-size: 20px;
  font-weight: 700;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    cursor: pointer;
  }
`;

export default Header;
