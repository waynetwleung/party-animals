import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

// uncomment so that webpack can bundle styles
// import styles from './style/application.scss';
import '../client/style/input.css';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>

);

