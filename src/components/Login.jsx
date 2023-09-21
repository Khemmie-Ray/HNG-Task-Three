import React, { useState } from 'react'
import { Link, useNavigate, NavLink } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const users = [{ email: "user@example.com", password: "1Password" }];

  const handleLogin = (e) => { 
    // Define handleLogin function
    e.preventDefault();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      localStorage.setItem("authenticated", true);
      navigate('/image-gallery'); // Navigate to Main gallery
    } else {
      alert("Invalid email or password.");
    }
  };
  return (
    <section>
        <section className='get-started'>
          <div className='coverImg'>
        <NavLink to="/" className="logo login-logo"><span>Photo</span>-Pro <i class="ri-camera-lens-fill logoImg"></i></NavLink>
          </div>
          <div className='login'>
            <h2>Log-In</h2>
            <p>Let's get you started.</p>
            <form action="" onSubmit={handleLogin}>
              <input type="email" 
                id="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
              <input type="password"
                required
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button>Submit</button>
            </form>
            <p>Don't have an account? <a href="#">Sign Up here</a></p>
          </div>
        </section>
    </section>
  )
}

export default Login