import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPag from '../pages/landing/LandingPag'
import Login from '../pages/login/login'
import PrivateRoute from './PrivateRoute'
import Home from '../pages/home/Home'

export default function AppRouter() {
    return (
        <Routes>
            <Route exact path='/' element={<LandingPag />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/home/*' element={ <PrivateRoute>
                <Home />
            </PrivateRoute> } />
        </Routes>
    )
}
