import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <div onClick={() => navigate('/')}>로고</div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  background-color: beige;
`;

export default Header;
