import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import de component
import Main from './pages/Main'
import Login from './pages/Login'
import Form from './pages/Form'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" component={Main} />
                <Route path="/form" component={Form} /> 
                <Route path="/login" component={Login} />
            </Routes>
        </BrowserRouter>
    )
}


export default AppRoutes