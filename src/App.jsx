import { useState, createContext, useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

// Pages
import Login from './pages/Login'
import StudentDashboard from './pages/student/StudentDashboard'
import StudentCompanies from './pages/student/StudentCompanies'
import StudentChat from './pages/student/StudentChat'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminCompanies from './pages/admin/AdminCompanies'
import AdminSchedule from './pages/admin/AdminSchedule'
import NotFound from './pages/error/NotFound'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Auth Context
export const AuthContext = createContext(null)

export function useAuth() {
  return useContext(AuthContext)
}

// Protected Route wrapper
function ProtectedRoute({ children, allowedRole }) {
  const { user } = useAuth()
  
  if (!user) {
    return <Navigate to="/" replace />
  }
  
  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to="/" replace />
  }
  
  return children
}

// Layout with Navbar and Footer
function AppLayout({ children }) {
  const { user } = useAuth()
  
  return (
    <div className="page">
      <Navbar role={user?.role} />
      <main className="page-main">{children}</main>
      <Footer />
    </div>
  )
}

function App() {
  const [user, setUser] = useState(null)

  const login = (role) => {
    setUser({ role, name: role === 'student' ? 'Student User' : 'Admin User' })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <Routes>
        {/* Login Page */}
        <Route 
          path="/" 
          element={user ? <Navigate to={`/${user.role}/dashboard`} replace /> : <Login />} 
        />

        {/* Student Routes */}
        <Route path="/student/dashboard" element={
          <ProtectedRoute allowedRole="student">
            <AppLayout><StudentDashboard /></AppLayout>
          </ProtectedRoute>
        } />
        <Route path="/student/companies" element={
          <ProtectedRoute allowedRole="student">
            <AppLayout><StudentCompanies /></AppLayout>
          </ProtectedRoute>
        } />
        <Route path="/student/chat" element={
          <ProtectedRoute allowedRole="student">
            <AppLayout><StudentChat /></AppLayout>
          </ProtectedRoute>
        } />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={
          <ProtectedRoute allowedRole="admin">
            <AppLayout><AdminDashboard /></AppLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/companies" element={
          <ProtectedRoute allowedRole="admin">
            <AppLayout><AdminCompanies /></AppLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/schedule" element={
          <ProtectedRoute allowedRole="admin">
            <AppLayout><AdminSchedule /></AppLayout>
          </ProtectedRoute>
        } />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthContext.Provider>
  )
}

export default App
