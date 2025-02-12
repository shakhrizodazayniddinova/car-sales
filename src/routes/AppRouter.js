import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminDashboard from '../components/admin-panel/AdminDashboard'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/user' index element={<AdminDashboard />}/>
      </Routes>
    </BrowserRouter>
  )
}
