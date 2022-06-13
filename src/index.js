import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './routes/App';
import Home from './routes/Home';
import AccommodationPage from './routes/AccommodationPage';
import About from './routes/About';
import Error from './routes/Error';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='accommodation' element={<AccommodationPage />}>
            <Route path=':accommodationId' element={<AccommodationPage />}></Route>
          </Route>
          <Route path='about' element={<About />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();