import './main.css';

import { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Hub } from './routes';

const container = document.getElementById('root');

render(
  <StrictMode>
    <BrowserRouter>
      <Hub />
    </BrowserRouter>
  </StrictMode>,
  container
);
