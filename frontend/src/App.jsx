// import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './shared/ProtectedRoute';
import AdminLayout from './admin/AdminLayout';
import AdminDashboardPage from './admin/AdminDashboardPage';
import AdminBooksPage from './admin/AdminBooksPage';
import AdminUsersPage from './admin/AdminUsersPage';
import AdminFinePage from './admin/AdminFinePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/login" element={ < Login/>} />
      <Route path="/signup" element={ < Signup/>} />

      {/*ProtectedRoute */}
      {/* admin */}
      <Route element={<ProtectedRoute allowedRole="admin" /> } >
        <Route path="/admin" element={<AdminLayout/>} >
          <Route index element ={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboardPage />} />
          <Route path="books" element={<AdminBooksPage />} />
          <Route path="users" element ={<AdminUsersPage />} />
          <Route path ="fines" element ={<AdminFinePage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App
