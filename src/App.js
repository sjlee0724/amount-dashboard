import React from 'react';
import { createGlobalStyle } from 'styled-components';
import AppTemplate from './components/Template';


const GlobalStyle = createGlobalStyle`
  body {
    background: #ccf5ff;
  }
`;

function App() {

  return (
    <>
      <GlobalStyle/>
      <AppTemplate/>
    </>
  );
}

export default App;
