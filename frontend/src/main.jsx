import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import {BrowserRouter} from "react-router-dom";
import './index.css'
import 'tailwindcss/tailwind.css';

import { Provider } from 'react-redux'
import store from './features/Slices/store.jsx'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

