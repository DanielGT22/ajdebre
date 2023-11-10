import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import NavbarBottom from './components/NavbarBottom';
import "./App.css"
import "./style.css"
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    
  return (
    <>
      <Sidebar />
      <MainContent />
      <NavbarBottom />
    </>
  );
}

export default App;
