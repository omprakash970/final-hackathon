import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../App";

export default function Navbar({ role }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="w-full bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <Link to={`/${role}/dashboard`} className="text-2xl font-bold text-blue-600">
        CareerFair
      </Link>

      <div className="flex items-center gap-6 text-gray-700 font-medium">
        {role === "student" && (
          <>
            <Link to="/student/dashboard" className="hover:text-blue-600 transition-colors">Dashboard</Link>
            <Link to="/student/companies" className="hover:text-blue-600 transition-colors">Companies</Link>
            <Link to="/student/chat" className="hover:text-blue-600 transition-colors">Chat</Link>
          </>
        )}

        {role === "admin" && (
          <>
            <Link to="/admin/dashboard" className="hover:text-green-600 transition-colors">Dashboard</Link>
            <Link to="/admin/companies" className="hover:text-green-600 transition-colors">Companies</Link>
            <Link to="/admin/schedule" className="hover:text-green-600 transition-colors">Schedule</Link>
          </>
        )}

        <button
          onClick={handleLogout}
          className={`px-4 py-2 rounded-lg font-semibold text-white transition-colors ${
            role === 'admin' 
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
