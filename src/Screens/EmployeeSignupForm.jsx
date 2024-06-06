import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
// import { updateEmployeeData , emplo/yeeData} from './globalData';

const EmployeeSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    linkedin: '',
    password: '', // Add password to the state
    technologies: [],
    skills: [],
    educationDetails: [], // Initialize educationDetails array
    experienceDetails: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTechnologyChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prevState => ({
      ...formData,
      technologies: checked ? [...prevState.technologies, name] : prevState.technologies.filter(tech => tech !== name)
    }));
  };

  const handleSkillsChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prevState => ({
      ...formData,
      skills: checked ? [...prevState.skills, name] : prevState.skills.filter(skill => skill !== name)
    }));
  };

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store formData in localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(formData);
    // Navigate to the next step
    navigate('/EmployeeSignup2');
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#E0F4FF' }}>
      <section className="mb-5 h-auto" style={{ width: '100%' }}>
        <div className="row d-flex justify-content-center align-items-center" style={{ height: 'auto' }}>
          <div className="col-md-8 col-lg-6 col-xl-6">
            <h2 className="signup-header mt-2" style={{ textAlign: 'center', marginBottom: '2rem', color: 'black' }}>Employee Details</h2>
            <div className="signup-container" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
              <form>
                <div className="form-group mb-4">
                  <div className="row">
                    <div className="col">
                      <label htmlFor="name" className="form-label text-black" style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="form-control" style={{ backgroundColor: '#416D19', color: 'white', border: 'none', background: 'white', width: '100%', height: '50px', outline: 'none', fontSize: '1rem', color: 'black', marginTop: '8px', border: '2px solid rgb(221, 221, 221)', borderRadius: '6px', padding: '0px 15px' }} />
                    </div>
                    <div className="col">
                      <label htmlFor="password" className="form-label text-black" style={{ display: 'block', marginBottom: '0.5rem' }}>Password</label>
                      <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required className="form-control" style={{ backgroundColor: '#416D19', color: 'white', border: 'none', background: 'white', width: '100%', height: '50px', outline: 'none', fontSize: '1rem', color: 'black', marginTop: '8px', border: '2px solid rgb(221, 221, 221)', borderRadius: '6px', padding: '0px 15px' }} />
                    </div>
                    <div className="col">
                      <label htmlFor="contact" className="form-label text-black" style={{ display: 'block', marginBottom: '0.5rem' }}>Contact</label>
                      <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} required className="form-control" style={{ backgroundColor: '#416D19', color: 'white', border: 'none', background: 'white', width: '100%', height: '50px', outline: 'none', fontSize: '1rem', color: 'black', marginTop: '8px', border: '2px solid rgb(221, 221, 221)', borderRadius: '6px', padding: '0px 15px' }} />
                    </div>
                  </div>
                </div>
                <div className="form-group mb-4">
                  <div className="row">
                    <div className="col">
                      <label htmlFor="email" className="form-label text-black" style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="form-control" style={{ backgroundColor: '#416D19', color: 'white', border: 'none', background: 'white', width: '100%', height: '50px', outline: 'none', fontSize: '1rem', color: 'black', marginTop: '8px', border: '2px solid rgb(221, 221, 221)', borderRadius: '6px', padding: '0px 15px' }} />
                    </div>
                    <div className="col">
                      <label htmlFor="linkedin" className="form-label text-black" style={{ display: 'block', marginBottom: '0.5rem' }}>LinkedIn Profile</label>
                      <input type="url" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleChange} required className="form-control" style={{ backgroundColor: '#416D19', color: 'white', border: 'none', background: 'white', width: '100%', height: '50px', outline: 'none', fontSize: '1rem', color: 'black', marginTop: '8px', border: '2px solid rgb(221, 221, 221)', borderRadius: '6px', padding: '0px 15px' }} />
                    </div>
                  </div>
                </div>
                <div className="row mb-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className="col d-flex flex-column">
                    <label className="form-label text-black" style={{ marginBottom: '0.5rem' }}>Technologies</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        style={{
                          backgroundColor: '#E0F4FF',
                          color: 'white',
                          border: '2px solid #ddd',
                          borderRadius: '5px',
                          padding: '10px',
                          cursor: 'pointer'
                        }}
                        type="checkbox"
                        id="PHP"
                        name="PHP"
                        checked={formData.technologies.includes("PHP")}
                        onChange={handleTechnologyChange}
                      />
                      <label className="form-check-label" htmlFor="PHP" style={{ color: 'black' }}>PHP</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        style={{
                          backgroundColor: '#E0F4FF',
                          color: 'white',
                          border: '2px solid #ddd',
                          borderRadius: '5px',
                          padding: '10px',
                          cursor: 'pointer'
                        }}
                        type="checkbox"
                        id="Java"
                        name="Java"
                        checked={formData.technologies.includes("Java")}
                        onChange={handleTechnologyChange}
                      />
                      <label className="form-check-label" htmlFor="Java" style={{ color: 'black' }}>Java</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        style={{
                          backgroundColor: '#E0F4FF',
                          color: 'white',
                          border: '2px solid #ddd',
                          borderRadius: '5px',
                          padding: '10px',
                          cursor: 'pointer'
                        }}
                        type="checkbox"
                        id="C"
                        name="C"
                        checked={formData.technologies.includes("C")}
                        onChange={handleTechnologyChange}
                      />
                      <label className="form-check-label" htmlFor="C" style={{ color: 'black' }}>C</label>
                    </div>
                  </div>

                  <div className="col d-flex flex-column">
                    <label className="form-label text-black" style={{ marginBottom: '0.5rem' }}>Skills</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        style={{
                          backgroundColor: '#E0F4FF',
                          color: 'white',
                          border: '2px solid #ddd',
                          borderRadius: '5px',
                          padding: '10px',
                          cursor: 'pointer'
                        }}
                        type="checkbox"
                        id="HTML"
                        name="HTML"
                        checked={formData.skills.includes("HTML")}
                        onChange={handleSkillsChange}
                      />
                      <label className="form-check-label" htmlFor="HTML" style={{ color: 'black' }}>HTML</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        style={{
                          backgroundColor: '#E0F4FF',
                          color: 'white',
                          border: '2px solid #ddd',
                          borderRadius: '5px',
                          padding: '10px',
                          cursor: 'pointer'
                        }}
                        type="checkbox"
                        id="CSS"
                        name="CSS"
                        checked={formData.skills.includes("CSS")}
                        onChange={handleSkillsChange}
                      />
                      <label className="form-check-label" htmlFor="CSS" style={{ color: 'black' }}>CSS</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        style={{
                          backgroundColor: '#E0F4FF',
                          color: 'white',
                          border: '2px solid #ddd',
                          borderRadius: '5px',
                          padding: '10px',
                          cursor: 'pointer'
                        }}
                        type="checkbox"
                        id="BOOTSTRAP5"
                        name="BOOTSTRAP5"
                        checked={formData.skills.includes("BOOTSTRAP5")}
                        onChange={handleSkillsChange}
                      />
                      <label className="form-check-label" htmlFor="BOOTSTRAP5" style={{ color: 'black' }}>Bootstrap 5</label>
                    </div>
                  </div>

                </div>
                <div className="row mb-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className="col">
                    <Link type="button" onClick={handleSubmit} className="btn btn-primary btn-block" style={{ width: '100%', padding: '0.5rem', backgroundColor: 'rgb(130, 106, 251)', color: 'white' }} to="/EmployeeSignup2">Add Education</Link>
                  </div>
                </div>
                <p style={{ marginBottom: '10px', color: '#333', textAlign: 'center' }}> 1 of 3</p>
              </form>
              <p style={{ marginBottom: '10px', color: '#333', textAlign: 'center' }}>
                Already a user? <Link to="/emplogin">Sign in here</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmployeeSignup;
