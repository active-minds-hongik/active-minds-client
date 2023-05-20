import React from 'react';
import { RecoilRoot } from 'recoil';
import { GlobalStyle } from './css/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyle />
        <Router />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
