import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Landing_Page from './landing_page.jsx';
import Bistro_Order from './bistro_order.jsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Bistro_Order/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
