import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

const CompanySigninForm = () => {
  const [formData, setFormData] = useState({
    compemail: '',
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
      const response = await axios.post('http://localhost:5000/api/company/cmplogin', {
        companyEmail: formData.compemail,
        password: formData.password
      });

      if (response.status === 200) {
        console.log('Login successful:', response.data);
        alert('Login Successfully!!');
        // Redirect to home page or dashboard
        window.location.href = '/'; // Redirect to home page
      } else {
        setError('Login failed. Please check your credentials.');
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please try again later.'); // Generic error message
      alert('Login failed. Please try again later.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#E0F4FF', padding: '20px' }}>
      <div style={{ position: 'relative', maxWidth: '700px', width: '100%', background: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }}>
        <header style={{ fontSize: '1.5rem', color: '#333', fontWeight: '500', textAlign: 'center' }}>Company Signin Form</header>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginTop: '20px' }}>
            <label htmlFor="compemail" style={{ color: '#333' }}>Company Email:</label>
            <input
              type="text"
              id="compemail"
              name="compemail"
              value={formData.compemail}
              onChange={handleChange}
              style={{ background: 'white', width: '100%', height: '50px', outline: 'none', fontSize: '1rem', color: 'black', marginTop: '8px', border: '2px solid #ddd', borderRadius: '6px', padding: '0 15px' }}
              required
            />
          </div>
          <div className="form-group" style={{ marginTop: '20px' }}>
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
            <p style={{ marginBottom: '10px', color: '#333' }}>
              Not registered yet? Click <a href="/companysignup">here</a> to sign up.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanySigninForm;
