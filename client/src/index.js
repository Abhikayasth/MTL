import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Create a root.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
