import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Route from './routes';
import GlobalStyle from './styles';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
