import './App.css';
import React, { useState } from 'react'
import Header from './components/Header/Header'
import Memo from './components/Memo/Memo'
import Calc from './components/Calc/Calc'
import Todo from './components/Todo/Todo'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/calc" element={<Calc />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;
