import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
// Pages
import Home from '../pages/Home'
import Login from '../pages/Login'
import RequestDemo from '../pages/RequestDemo'
import SignUp from '../pages/SignUpAndLogin'



const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/requestDemo" element={<RequestDemo />} />
      <Route path="/signUp" element={<SignUp />} />

      {/* Routes Admin */}
      {/* <Route path="/admin111" element={<Dashboard />}>
        <Route path="/admin111/users" element={<Users />} />
        <Route path="/admin111/settings" element={<Settings />} />
      </Route> */}
    </Routes>
  );
}

export default Routers