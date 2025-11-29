import { useState, createContext, useContext, useEffect } from 'react'
import { CompaniesProvider } from './contexts/CompaniesContext'
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
export const ThemeContext = createContext(null)

export function useAuth() {
  return useContext(AuthContext)
}

export function useTheme() {
  return useContext(ThemeContext)
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
  const { theme } = useTheme()

  return (
    <div className="page" data-theme={theme}>
      <Navbar role={user?.role} />
      <main className="page-main">{children}</main>
      <Footer />
    </div>
  )
}

function App() {
  const [user, setUser] = useState(null)
  const [theme, setTheme] = useState(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('cf-theme') : null
    return stored === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cf-theme', theme)
    }
  }, [theme])

  const login = (role) => {
    setUser({ role, name: role === 'student' ? 'Student User' : 'Admin User' })
  }

  const logout = () => {
    setUser(null)
  }

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <CompaniesProvider>
          <Routes>
          <Route 
            path="/" 
            element={user ? <Navigate to={`/${user.role}/dashboard`} replace /> : <Login />} 
          />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
        </CompaniesProvider>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
