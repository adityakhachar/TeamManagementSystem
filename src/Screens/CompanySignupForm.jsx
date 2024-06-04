import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeSignUpForm = () => {
  const [formData, setFormData] = useState({
    companyName: '', // Add companyName field
    password: '',
    companyEmail: '', // Add companyEmail field
    directorName: '',
    description: '',
    technologies: [],
    numberOfProjects: '',
    numberOfEmployees: '',
    city: '',
    location: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    let updatedTechnologies = [...formData.technologies];

    if (updatedTechnologies.includes(value)) {
      updatedTechnologies = updatedTechnologies.filter((tech) => tech !== value);
    } else {
      updatedTechnologies.push(value);
    }

    setFormData({ ...formData, technologies: updatedTechnologies });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message
    console.log('Form submitted:', formData); // Debug log
  
    try {
      const response = await fetch("http://localhost:5000/api/company/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const result = await response.json();
      console.log('Server response:', result); // Debug log
      
      if (!result.status === 201) {
        setError('Registration failed, please try again.');
      } else {
        navigate('/');
        // alert('Company registered successfully!'); // Optional: Show an alert
         // Redirect to the home page after successful registration
      }
    } catch (err) {
      console.error('Fetch error:', err); // Debug log
      setError('An error occurred, please try again.');
    }
  };
  

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#E0F4FF', padding: '20px' }}>
      <div style={{ position: 'relative', maxWidth: '700px', width: '100%', background: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }}>
        <header style={{ fontSize: '1.5rem', color: '#333', fontWeight: '500', textAlign: 'center' }}>Company Signup Form</header>
        <form className="form" onSubmit={handleSubmit}>
          <div className="name-email-container" style={{ display: 'flex', marginTop: '20px', columnGap: '15px' }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label htmlFor="companyName" style={{ color: '#333' }}>Company Name:</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                style={{ background: 'white', width: '100%', height: '50px', outline: 'none', fontSize: '1rem', color: 'black', marginTop: '8px', border: '2px solid #ddd', borderRadius: '6px', padding: '0 15px' }}
                required
              />
            </div>
            <div className="form-group" style={{ flex: 1 }}>
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
            <div className="form-group" style={{ flex: 1 }}>
              <label htmlFor="companyEmail" style={{ color: '#333' }}>Company Email:</label>
              <input
                type="text"
                id="companyEmail"
                name="companyEmail"
                value={formData.companyEmail}
                onChange={handleChange}
                style={{ background: 'white', width: '100%', height: '50px', outline: 'none', fontSize: '1rem', color: 'black', marginTop: '8px', border: '2px solid #ddd', borderRadius: '6px', padding: '0 15px' }}
                required
              />
            </div>
          </div>
          <div className="director-description-container" style={{ display: 'flex', marginTop: '20px', columnGap: '15px' }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label htmlFor="directorName" style={{ color: '#333' }}>Director Name:</label>
              <input
                type="text"
                id="directorName"
                name="directorName"
                value={formData.directorName}
                onChange={handleChange}
                style={{ background: 'white', width: '100%', height: '50px', outline: 'none', fontSize: '1rem', color: 'black', marginTop: '8px', border: '2px solid #ddd', borderRadius: '6px', padding: '0 15px' }}
                required
              />
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label htmlFor="description" style={{ color: '#333' }}>Description:</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                style={{ background: 'white', width: '100%', outline: 'none', fontSize: '1rem', color: 'black', marginTop: '8px', border: '2px solid #ddd', borderRadius: '6px', padding: '0 15px' }}
                rows={2}
                required
              />
            </div>
          </div>
          <div style={{ width: '100%', marginTop: '20px' }}>
            <label style={{ color: '#333' }}>Technologies:</label>
            <div style={{ marginTop: '8px' }}>
              <label style={{ marginRight: '15px' }}>
                <input
                  type="checkbox"
                  name="PHP"
                  value="PHP"
                  checked={formData.technologies.includes('PHP')}
                  onChange={handleCheckboxChange}
                /> PHP
              </label>
              <label style={{ marginRight: '15px' }}>
                <input
                  type="checkbox"
                  name="React JS"
                  value="React JS"
                  checked={formData.technologies.includes('React JS')}
                  onChange={handleCheckboxChange}
                /> React JS
              </label>
              <label style={{ marginRight: '15px' }}>
                <input
                  type="checkbox"
                  name="Node JS"
                  value="Node JS"
                  checked={formData.technologies.includes('Node JS')}
                  onChange={handleCheckboxChange}
                /> Node JS
              </label>
              <label style={{ marginRight: '15px' }}>
                <input
                  type="checkbox"
                  name="Express JS"
                  value="Express JS"
                  checked={formData.technologies.includes('Express JS')}
                  onChange={handleCheckboxChange}
                /> Express JS
              </label>
              <label>
                <input
                  type="checkbox"
                  name="Flutter"
                  value="Flutter"
                  checked={formData.technologies.includes('Flutter')}
                  onChange={handleCheckboxChange}
                /> Flutter
              </label>
            </div>
          </div>
          <div style={{ display: 'flex', marginTop: '20px', columnGap: '15px' }}>
            <div style={{ width: '50%' }}>
              <label htmlFor="numberOfProjects" style={{ color: '#333' }}>Number of Projects:</label>
              <select
                id="numberOfProjects"
                name="numberOfProjects"
                value={formData.numberOfProjects}
                onChange={handleChange}
                style={{ background: 'white', width: '100%', height: '50px', outline: 'none', fontSize: '1rem', color: 'black', marginTop: '8px', border: '2px solid #ddd', borderRadius: '6px', padding: '0 15px' }}
                required
              >
                <option value="">Select</option>
                <option value="0-100">0-100</option>
                <option value="100-200">100-200</option>
                <option value="200-300">200-300</option>
                <option value="300-400">300-400</option>
                <option value="500+">500+</option>
              </select>
            </div>
            <div style={{ width: '50%' }}>
              <label htmlFor="numberOfEmployees" style={{ color: '#333' }}>Number of Employees:</label>
              <select
                id="numberOfEmployees"
                name="numberOfEmployees"
                value={formData.numberOfEmployees}
                onChange={handleChange}
                style={{ background: 'white', width: '100%', height: '50px', outline: 'none', fontSize: '1rem', color: 'black', marginTop: '8px', border: '2px solid #ddd', borderRadius: '6px', padding: '0 15px' }}
                required
              >
                <option value="">Select</option>
                <option value="0-100">0-100</option>
                <option value="100-200">100-200</option>
                <option value="200-300">200-300</option>
                <option value="300-400">300-400</option>
                <option value="500+">500+</option>
              </select>
            </div>
          </div>
          <div className="city-location-container" style={{ display: 'flex', marginTop: '20px', columnGap: '15px' }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label htmlFor="city" style={{ color: '#333' }}>City:</label>
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                style={{ background: 'white', width: '100%', height: '50px', outline: 'none', fontSize: '1rem', color: 'black', marginTop: '8px', border: '2px solid #ddd', borderRadius: '6px', padding: '0 15px' }}
                required
              >
                <option value="">Select</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Gandhinagar">Gandhinagar</option>
                <option value="Pune">Pune</option>
                <option value="Delhi">Delhi</option>
              </select>
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label htmlFor="location" style={{ color: '#333' }}>Location:</label>
              <textarea
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                style={{ background: 'white', width: '100%', height: '50px', outline: 'none', fontSize: '1rem', color: 'black', marginTop: '8px', border: '2px solid #ddd', borderRadius: '6px', padding: '0 15px' }}
                rows={4}
                required
              />
            </div>
          </div>
          <button type="submit" style={{ height: '55px', width: '100%', color: '#fff', fontSize: '1rem', fontWeight: '400', marginTop: '30px', border: 'none', cursor: 'pointer', transition: 'all 0.2s ease', background: 'rgb(130, 106, 251)' }}>Submit</button>
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <p style={{ marginBottom: '10px', color: '#333' }}>Already registered? Click <a href="/complogin">here</a> to login.</p>
          </div>
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default EmployeeSignUpForm;
