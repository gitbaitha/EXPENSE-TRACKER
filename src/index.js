import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalProvider } from "./context/GlobalState";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={
          <GlobalProvider>
            <App/>
          </GlobalProvider>
        }/>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


