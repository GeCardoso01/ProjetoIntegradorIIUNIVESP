import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import de component
import Main from './pages/Main/index'
import Login from './pages/Login'
import Form from './pages/Form'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/form" element={<Form />} /> 
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}


export default AppRoutes