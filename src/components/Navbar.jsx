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
    <nav className="navbar">
      <Link to={`/${role}/dashboard`} className="nav-brand">CareerFair</Link>

      <div className="nav-links">
        {role === "student" && (
          <>
            <Link to="/student/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/student/companies" className="nav-link">Companies</Link>
            <Link to="/student/chat" className="nav-link">Chat</Link>
          </>
        )}

        {role === "admin" && (
          <>
            <Link to="/admin/dashboard" className="nav-link nav-link--green">Dashboard</Link>
            <Link to="/admin/companies" className="nav-link nav-link--green">Companies</Link>
            <Link to="/admin/schedule" className="nav-link nav-link--green">Schedule</Link>
          </>
        )}

        <button
          onClick={handleLogout}
          className={role === 'admin' ? 'btn btn-green' : 'btn btn-primary'}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
