import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateApplication from "./pages/students/CreateApplication";
import Applications from "./pages/students/Applications";
import Home from "./pages/Home";
import  StudentDashboard from "./pages/students/Dashboard";
import TeacherDashboard from "./pages/teachers/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import { AuthProvider } from "./providers/AuthContext";
import Footer from "./components/Footer";



function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/student/createApplication"
          element={<CreateApplication />}
        />
        <Route path="/student/storeApplication" element={<Applications />} />
        <Route path="/" element={<Home/>} />
        
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />



        <Route path="*" element={<PageNotFound/>} />
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
