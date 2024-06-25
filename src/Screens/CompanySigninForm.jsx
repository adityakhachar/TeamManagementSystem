import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation

const CompanySigninForm = () => {
  const [formData, setFormData] = useState({
    compemail: '',
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
      const response = await axios.post('https://teammanagementsystembackend.onrender.com/api/company/cmplogin', {
        companyEmail: formData.compemail,
        password: formData.password
      });

      if (response.status === 200) {
        const { authToken } = response.data;
        localStorage.setItem('companyAuthToken', authToken);
        console.log('Login successful:', response.data);
        
        await handleVerify(); // Call verification function

        // Redirect to home page or dashboard
        // navigate('/'); // Use navigate to redirect
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

  const handleVerify = async () => {
    try {
      const authToken = localStorage.getItem('companyAuthToken');
      console.log('Using authToken:', authToken);

      const response = await fetch("https://teammanagementsystembackend.onrender.com/api/company/auth/protected-route", {
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

      // alert("Login successful!!");
      localStorage.setItem("userData", JSON.stringify(json));
      console.log(localStorage.getItem('userData'));
      alert("login success");
      navigate('/');
      // Optionally update the authToken if the response contains a new one
      if (json.authToken) {
        localStorage.setItem("authToken", json.authToken);
        console.log('Updated authToken:', localStorage.getItem("authToken"));
      }
    } catch (error) {
      console.error('Error during verification:', error);
      alert('An error occurred during verification.');
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
