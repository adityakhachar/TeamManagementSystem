import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

const EmployeeSigninFormm = () => {
  const [formData, setFormData] = useState({
    empemail: '',
    password: ''
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/employee/emplogin', {
        email: formData.empemail,
        password: formData.password
      });

      // Assuming your backend responds with a status code or message indicating success
      if (response.status === 200) {
        console.log('Login successful:', response.data);
        // Redirect to home page or dashboard (adjust the logic as per your app's routing)
        window.location.href = '/'; // Redirect to home page
      } else {
        // Handle other response statuses if needed
        setError(`Login failed. Please check your credentials. ${formData.password } and `);
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please try again later.'); // Generic error message
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#E0F4FF', padding: '20px' }}>
      <div style={{ position: 'relative', maxWidth: '500px', width: '100%', background: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }}>
        <header style={{ fontSize: '1.5rem', color: '#333', fontWeight: '500', textAlign: 'center' }}>Employee Signin Form</header>
        <form className="form" onSubmit={handleSubmit}>
          <div style={{ width: '100%', marginTop: '20px' }}>
            <label htmlFor="CEmail" style={{ color: '#333' }}>Employee Email:</label>
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

          {/* Error message display */}
          {error && <div style={{ marginTop: '10px', color: 'red', textAlign: 'center' }}>{error}</div>}

          {/* Signup Link */}
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <p style={{ marginBottom: '10px', color: '#333' }}>Not registered yet? Click <a href="/empsignup">here</a> to sign up.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeSigninFormm;
