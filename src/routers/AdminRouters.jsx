import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from '../admin/pages/Dashboard'
import Users from '../admin/pages/Users'
import Settings from '../admin/pages/Sttings'

const AdminRouters = () => {
  return (
    <Routes>
      {/* Routes Admin */}
      <Route path="/admin111" element={<Dashboard />} />
      <Route path="/admin111/users" element={<Users />} />
      <Route path="/admin111/settings" element={<Settings />} />
    </Routes>
  );
}

export default AdminRouters