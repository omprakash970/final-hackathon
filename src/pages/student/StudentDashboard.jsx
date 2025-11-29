export default function StudentDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Student Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-gray-600">Companies</h3>
          <p className="text-3xl font-bold text-blue-600">12</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
          <h3 className="text-lg font-semibold text-gray-600">Booths Visited</h3>
          <p className="text-3xl font-bold text-green-600">5</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-500">
          <h3 className="text-lg font-semibold text-gray-600">Scheduled</h3>
          <p className="text-3xl font-bold text-purple-600">3</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Upcoming Events</h3>
          <ul className="space-y-3">
            <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>Google Tech Talk</span>
              <span className="text-sm text-gray-500">2:00 PM</span>
            </li>
            <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>Amazon Interview</span>
              <span className="text-sm text-gray-500">4:00 PM</span>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Your Resume</h3>
          <p className="text-gray-600 mb-4">Keep your resume updated for better opportunities</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Update Resume
          </button>
        </div>
      </div>
    </div>
  );
}
