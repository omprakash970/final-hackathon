import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../App';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('student');
  const [humanCheck, setHumanCheck] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!humanCheck) return;
    login(selectedRole);
    navigate(`/${selectedRole}/dashboard`);
  };

 return (
  <div className="login-bg">

    <div className="glass">

      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="title-xl" style={{ color: '#e2e8f0' }}>
          Career Fair 2025
        </h1>
        <p className="muted" style={{ color: '#cbd5e1' }}>
          Sign in to continue (Enter any email and password)
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
          <label className="label" style={{ color: '#e2e8f0' }}>Email</label>
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
          <label className="label" style={{ color: '#e2e8f0' }}>Password</label>
          <input
            type="password"
            value={password}
            style={{ color: "black" }}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="form-field"
          />
        </div>

        {/* Human verification (Simple reCAPTCHA-style checkbox) */}
        <div className="section-muted" style={{ display:'flex', alignItems:'center', gap:12, background:'rgba(2,6,23,0.4)' }}>
          <input
            id="human-check"
            type="checkbox"
            checked={humanCheck}
            onChange={(e) => setHumanCheck(e.target.checked)}
            style={{ width:18, height:18 }}
          />
          <label htmlFor="human-check" className="muted" style={{ color:'#cbd5e1' }}>
            I'm not a robot
          </label>
        </div>

        {/* Login Button */}
        <button type="submit" className="btn btn-purple w-full" style={{fontSize:16}} disabled={!humanCheck}>
          Login as {selectedRole === 'student' ? 'Student' : 'Admin'}
        </button>

      </form>

      {/* Register */}
      <p className="text-center" style={{ color:'#cbd5e1', marginTop:16, fontSize:14 }}>
        Don’t have an account?{" "}
        <a href="#" className="link" style={{ color:'#e2e8f0', fontWeight:800 }}>
          Register here
        </a>
      </p>
    </div>
  </div>
);

}
