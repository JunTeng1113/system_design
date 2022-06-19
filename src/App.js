
import * as React from 'react';
import Button from '@mui/material/Button';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
  HashRouter,
} from "react-router-dom";

import NavBar from './component/NavBar';
import Login from './component/Login';
import Register from './component/Register';
import TicketBuy from './component/TicketBuyPage1';
import TicketBuyDetail from './component/TicketBuyDetail';
import TicketBuyPay from './component/TicketBuyPay';
import MovieInfo from './component/MovieInfo';
import TheaterInfo from './component/TheaterInfo';
import TicketFinishedDetail from './component/TicketFinishedDetail';
import Record from './component/Record';

const steps = [
  '線上訂票',
  '詳細資訊',
  '付款資訊',
  '完成訂票',
];

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('學生優惠票', 180, 2, 360, 4.0),
  createData('可口可樂', 60, 2, 120, 4.3),
];
function createData2(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<TheaterInfo />} />
        <Route path="/TheaterInfo" element={<TheaterInfo />} />
        <Route path="/MovieInfo" element={<MovieInfo />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/TicketBuyPage" element={
          <TicketBuy steps={steps} />
        } />
        <Route path="/TicketBuyDetail" element={
          <TicketBuyDetail steps={steps} />
        } />
        <Route path="/TicketBuyPay" element={
          <TicketBuyPay steps={steps} />
        } />
        <Route path="/TicketFinishedDetail/:tradeNumber" element={
          <TicketFinishedDetail steps={steps} rows={rows} />
        } />
        <Route path="/Record" element={
          <Record  />
        } />
      </Routes>
    </HashRouter>
  );
}

export default App;
