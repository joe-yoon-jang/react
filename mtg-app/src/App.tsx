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
      <Route path="/main/*" element={<Main />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
