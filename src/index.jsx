import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from "react-router-dom";
import Fly from './routes/fly-yoga';
import Sophro from './routes/sophrotherapie';
import Reservation from './routes/reservation';
import ScrollToTop from './utils/ScrollToTop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="App">
    <HashRouter>
      <ScrollToTop>
        <Routes>
            <Route exact path="/" element={<App/>}/>
            <Route path='/fly-yoga' element={<Fly/>}/>
            <Route path="/sophrotherapie" element={<Sophro/>}/>
            <Route path="/reservation" element={<Reservation/>}/>
        </Routes>
      </ScrollToTop>
  </HashRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
