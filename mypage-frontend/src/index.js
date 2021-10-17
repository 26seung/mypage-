import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Footer from './common/footer';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <Footer /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);