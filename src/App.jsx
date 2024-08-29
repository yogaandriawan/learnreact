import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import AuthPage from './features/authentication/pages/AuthPage.jsx'
import Navbar from './components/layout/navbar.jsx'
import Dashboard from './components/layout/Dashboard.jsx'

export default function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </Router>

  )
}

