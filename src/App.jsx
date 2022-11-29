import React from 'react';
import './App.css'
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <div className='App'>
      <NavBar />
      <div className='container'>
        <Outlet />
      </div>
    </div>
  )
}


