export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-gray-600">Companies</h3>
          <p className="text-3xl font-bold text-blue-600">12</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
          <h3 className="text-lg font-semibold text-gray-600">Booths</h3>
          <p className="text-3xl font-bold text-green-600">15</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-500">
          <h3 className="text-lg font-semibold text-gray-600">Students</h3>
          <p className="text-3xl font-bold text-purple-600">256</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-orange-500">
          <h3 className="text-lg font-semibold text-gray-600">Registrations</h3>
          <p className="text-3xl font-bold text-orange-600">89</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Recent Activity</h3>
          <ul className="space-y-3">
            <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>New student registered</span>
              <span className="text-sm text-gray-500">5 min ago</span>
            </li>
            <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>Google booth updated</span>
              <span className="text-sm text-gray-500">15 min ago</span>
            </li>
            <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>New company added</span>
              <span className="text-sm text-gray-500">1 hr ago</span>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors">
              + Add New Company
            </button>
            <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              + Create Booth
            </button>
            <button className="w-full bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              View All Students
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
