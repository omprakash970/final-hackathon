import { Link } from "react-router-dom";

export default function Navbar({ role = "student" }) {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-blue-600">CareerFair</h1>

      <div className="flex items-center gap-6 text-gray-700 font-medium">
        {role === "student" && (
          <>
            <Link to="/student/dashboard">Dashboard</Link>
            <Link to="/student/companies">Companies</Link>
            <Link to="/student/chat">Chat</Link>
            <Link to="/student/resume">Resume</Link>
          </>
        )}

        {role === "admin" && (
          <>
            <Link to="/admin/dashboard">Dashboard</Link>
            <Link to="/admin/companies">Companies</Link>
            <Link to="/admin/schedule">Schedule</Link>
            <Link to="/admin/registrations">Registrations</Link>
          </>
        )}
      </div>
    </nav>
  );
}
