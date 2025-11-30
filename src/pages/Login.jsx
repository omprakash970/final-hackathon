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
  <div className="login-bg">

    <div className="glass">

      {/* Title */}
      <div className="text-center mb-10" style={{color:'#fff'}}>
        <h1 className="title-xl" style={{color:'#fff'}}>
          Career Fair 2025
        </h1>
        <p className="muted" style={{color:'rgba(255,255,255,0.9)'}}>
          Sign in to continue(Enter any email and password to continue)
        </p>
      </div>

      {/* Role Tabs */}
      <div className="tabs">
        <button
          onClick={() => setSelectedRole('student')}
          className={`tab ${selectedRole === 'student' ? 'active' : ''}`}
        >
          🎓 Student
        </button>

        <button
          onClick={() => setSelectedRole('admin')}
          className={`tab ${selectedRole === 'admin' ? 'active admin' : ''}`}
        >
          💼 Admin
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{display:'grid', gap:16}}>

        {/* Email */}
        <div>
          <label className="label" style={{color:'#fff'}}>Email</label>
          <input
            type="email"
            value={email}
            style={{ color: "black" }}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="form-field"
          />
        </div>

        {/* Password */}
        <div>
          <label className="label" style={{color:'#fff'}}>Password</label>
          <input
            type="password"
            value={password}
            style={{ color: "black" }}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="form-field"
          />
        </div>

        {/* Login Button */}
        <button type="submit" className="btn btn-purple w-full" style={{fontSize:16}}>
          Login as {selectedRole === 'student' ? 'Student' : 'Admin'}
        </button>

      </form>

      {/* Register */}
      <p className="text-center" style={{color:'rgba(255,255,255,0.85)', marginTop:16, fontSize:14}}>
        Don’t have an account?{" "}
        <a href="#" className="link" style={{color:'#fff', fontWeight:800}}>
          Register here
        </a>
      </p>
    </div>
  </div>
);

}
