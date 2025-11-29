import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../App';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('student');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(selectedRole);
    navigate(`/${selectedRole}/dashboard`);
  };

 return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#5b0dee] via-[#8f59e6] to-[#2575fc] px-4">

    <div className="backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-12 w-full max-w-lg text-white">

      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight drop-shadow-lg">
          Career Fair 2025
        </h1>
        <p className="text-gray-200 mt-2 text-sm">
          Sign in to continue
        </p>
      </div>

      {/* Role Tabs */}
      <div className="flex bg-white/20 rounded-full p-1 mb-10 shadow-inner">
        <button
          onClick={() => setSelectedRole('student')}
          className={`flex-1 py-3 rounded-full font-semibold transition-all duration-200 ${
            selectedRole === 'student'
              ? 'bg-white text-purple-700 shadow-lg'
              : 'text-white/80 hover:text-white'
          }`}
        >
          🎓 Student
        </button>

        <button
          onClick={() => setSelectedRole('admin')}
          className={`flex-1 py-3 rounded-full font-semibold transition-all duration-200 ${
            selectedRole === 'admin'
              ? 'bg-white text-purple-700 shadow-lg'
              : 'text-white/80 hover:text-white'
          }`}
        >
          💼 Admin
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1 text-white/90">Email</label>
          <input
            type="email"
            value={email}
            style={{ color: "black" }}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-xl bg-white/95 border border-white/40 focus:ring-4 focus:ring-purple-400 outline-none shadow-sm"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-1 text-white/90">Password</label>
          <input
            type="password"
            value={password}
            style={{ color: "black" }}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-3 rounded-xl bg-white/95 border border-white/40 focus:ring-4 focus:ring-purple-400 outline-none shadow-sm"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-white text-purple-700 font-bold text-lg shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all"
        >
          Login as {selectedRole === 'student' ? 'Student' : 'Admin'}
        </button>

      </form>

      {/* Register */}
      <p className="text-center text-white/80 mt-8 text-sm">
        Don’t have an account?{" "}
        <a href="#" className="text-white font-bold underline hover:text-yellow-300">
          Register here
        </a>
      </p>
    </div>
  </div>
);

}
