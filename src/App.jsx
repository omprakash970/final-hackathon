import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CompanyCard from './components/CompanyCard'

function App() {
  const [userType, setUserType] = useState(null)

  const companies = [
    { id: 1, name: 'Google', logo: '/assets/logos/google.png' },
    { id: 2, name: 'Amazon', logo: '/assets/logos/amazon.png' },
    { id: 3, name: 'Infosys', logo: '/assets/logos/infosys.png' },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      <main className="flex-1">
        {!userType ? (
          // Landing Page
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-gray-900 to-gray-900 px-4">
            <div className="text-center max-w-2xl">
              <h1 className="text-6xl font-bold mb-6">Career Fair 2025</h1>
              <p className="text-xl text-gray-300 mb-12">
                Connect with top companies and explore amazing career opportunities
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={() => setUserType('student')}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-lg transition-colors"
                >
                  Student
                </button>
                <button
                  onClick={() => setUserType('admin')}
                  className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg text-lg transition-colors"
                >
                  Admin
                </button>
              </div>
            </div>
          </section>
        ) : (
          // User Dashboard
          <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex justify-between items-center mb-12">
              <h1 className="text-4xl font-bold">
                {userType === 'student' ? 'Student Dashboard' : 'Admin Dashboard'}
              </h1>
              <button
                onClick={() => setUserType(null)}
                className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              >
                Back
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Companies</h3>
                <p className="text-4xl font-bold">12</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-green-400 mb-2">Booths</h3>
                <p className="text-4xl font-bold">15</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-purple-400 mb-2">
                  {userType === 'student' ? 'Schedules' : 'Users'}
                </h3>
                <p className="text-4xl font-bold">{userType === 'student' ? 8 : 256}</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8">Featured Companies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {companies.map((company) => (
                <CompanyCard key={company.id} name={company.name} logo={company.logo} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App
