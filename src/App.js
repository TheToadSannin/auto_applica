import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import Signup from "./pages/Signup";
import CreateApplication from "./pages/students/CreateApplication";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/student/createApplication" element={<CreateApplication/>}/>
      </Routes>
    </BrowserRouter>
  )
  
}


export default App;
