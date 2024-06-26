import React, { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom';

const EmployeeSigninFormm = () => {
  const [formData, setFormData] = useState({
    empemail: '',
    password: ''
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://teammanagementsystembackend.onrender.com/api/employee/emplogin', {
        email: formData.empemail,
        password: formData.password
      });

      if (response.status === 200) {
        const { authToken } = response.data;
        localStorage.setItem('employeeAuthToken', authToken);
        console.log('Login successful:', response.data);

        await handleVerify(); // Call verification function
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please check your credentials.');
    }
  };

  const handleVerify = async () => {
    try {
      const authToken = localStorage.getItem('employeeAuthToken');
      console.log('Using authToken:', authToken);

      const response = await fetch("https://teammanagementsystembackend.onrender.com/api/employee/auth/protected-employee-route", {
        method: 'GET',
        headers: {
          'Authorization': authToken
        },
      });

      if (!response.ok) {
        throw new Error('Failed to verify');
      }

      const json = await response.json();
      console.log('Verification response:', json);

      if (!json.user || !json.user.id) {
        throw new Error('Invalid user data');
      }

      localStorage.setItem("userData", JSON.stringify(json));
      console.log(localStorage.getItem('userData'));
      navigate('/');
    } catch (error) {
      console.error('Error during verification:', error);
      setError('An error occurred during verification.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#E0F4FF', padding: '20px' }}>
      <div style={{ position: 'relative', maxWidth: '500px', width: '100%', background: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }}>
        <header style={{ fontSize: '1.5rem', color: '#333', fontWeight: '500', textAlign: 'center' }}>Employee Signin Form</header>
        <form className="form" onSubmit={handleSubmit}>
          <div style={{ width: '100%', marginTop: '20px' }}>
            <label htmlFor="email" style={{ color: '#333' }}>Employee Email:</label>
            <input
              type="text"
              id="email"
              name="empemail"
              value={formData.empemail}
              onChange={handleChange}
              style={{ background: 'white', width: '100%', height: '50px', outline: 'none', fontSize: '1rem', color: 'black', marginTop: '8px', border: '2px solid #ddd', borderRadius: '6px', padding: '0 15px' }}
              required
            />
          </div>
          <div style={{ width: '100%', marginTop: '20px' }}>
            <label htmlFor="password" style={{ color: '#333' }}>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ background: 'white', width: '100%', height: '50px', outline: 'none', fontSize: '1rem', color: 'black', marginTop: '8px', border: '2px solid #ddd', borderRadius: '6px', padding: '0 15px' }}
              required
            />
          </div>

          <button type="submit" style={{ height: '55px', width: '100%', color: '#fff', fontSize: '1rem', fontWeight: '400', marginTop: '30px', border: 'none', cursor: 'pointer', transition: 'all 0.2s ease', background: 'rgb(130, 106, 251)' }}>Sign In</button>

          {error && <div style={{ marginTop: '10px', color: 'red', textAlign: 'center' }}>{error}</div>}

          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <p style={{ marginBottom: '10px', color: '#333' }}>Not registered yet? Click <Link to="/empsignup">here</Link> to sign up.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeSigninFormm;
