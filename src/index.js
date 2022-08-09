import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ItemProvider } from './context/ItemProvider';
import Reducer, { initialState } from './context/Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
  <BrowserRouter>
   <ItemProvider initialState={initialState} reducer={Reducer}>
    <App />
   </ItemProvider>
  </BrowserRouter>
 </React.StrictMode>,
);
