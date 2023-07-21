import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import Signup from "./pages/Signup";
import CreateApplication from "./pages/students/CreateApplication";
import Applications from "./pages/students/Applications";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/student/createApplication" element={<CreateApplication/>}/>
        <Route path="/student/storeApplication" element={<Applications/>}/>
      </Routes>
    </BrowserRouter>
  )
  
}


export default App;
