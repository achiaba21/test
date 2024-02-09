import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AuthPage from "./authpage";
import Dashboard from "./dashbord";
import "./App.css";

function App() {
  return (
    
      <div className="App">
      <Routes>
          <Route path="/" element = { <AuthPage />}/>
          <Route  path="/dashboard" element ={<Dashboard />}/>
      </Routes>
      </div>

    
  );
}

export default App;
