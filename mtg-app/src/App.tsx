import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Main from './Main';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/list/*" element={<List />} />
      <Route path="/" element={<Main />}></Route>
      {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
      <Route path="*" element={<Main />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
