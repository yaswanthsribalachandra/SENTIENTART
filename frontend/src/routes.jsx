import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./components/auths/Login";
import AdminRegister from "./components/auths/AdminRegister";
import AdminForgotPassword from "./components/auths/AdminForgotPassword";
import AdminOtpVerification from "./components/auths/AdminOtpVerification";
import AdminResetPassword from "./components/auths/AdminResetPassword";
import LoginSuccess from "./components/auth/loginsuccess";
import HowItWorks from "./components/auth/HowItWorks";
import Creators from "./components/auth/Creators";

import ProtectedRoute from "./proctedroute"; // 👈 add this

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      <Route path="/admin/register" element={<AdminRegister />} />
      <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
      <Route path="/admin/verify-otp" element={<AdminOtpVerification />} />
      <Route path="/admin/reset-password" element={<AdminResetPassword />} />

      {/* 🔐 PROTECTED ROUTES */}
      <Route
        path="/login-success"
        element={
          <ProtectedRoute>
            <LoginSuccess />
          </ProtectedRoute>
        }
      />

      <Route
        path="/how-it-works"
        element={
          <ProtectedRoute>
            <HowItWorks />
          </ProtectedRoute>
        }
      />

      <Route
        path="/creators"
        element={
          <ProtectedRoute>
            <Creators />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Login />} />
    </Routes>
  );
}