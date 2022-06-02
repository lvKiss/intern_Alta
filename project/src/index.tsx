import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Login } from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GivePassAgain } from './components/GivePassAgain';
import { GivePassAgainNew } from './components/GivePassAgainNew';
import Person from './components/Person';
import { MyDashboard } from './components/MyDashboard';
import Info from './components/info';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dang-nhap" element={<Info />} />
      <Route path="/Info" element={<Info />} />
      <Route path="/quen-mat-khau" element={<GivePassAgain />} />
      <Route path="/dashboard" element={<MyDashboard />} />
      <Route
        path="/login"
        element={<Login name="longlongtttt113@gmail.com" password="12345678" />}
      />
      <Route path="/dat-lai-mat-khau" element={<GivePassAgainNew />} />
      <Route path="/bieudo" element={<Person/>} />
    </Routes>
  </BrowserRouter>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
