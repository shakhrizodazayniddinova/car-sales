import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminDashboard from '../components/admin-panel/AdminDashboard';
import Page404 from '../components/pages/page404/page404';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/user' index element={<AdminDashboard />}/>

        <Route path='*' index element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}
