import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import de páginas
import Main from './pages/Main'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'


function AppRoutes() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/form" element={<Register />} /> 
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}


export default AppRoutes