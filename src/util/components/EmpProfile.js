import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css'; // Import the custom CSS file for styles

const EmpProfile = ({ employee, onClose }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    if (typeof onClose === 'function') {
      onClose(); // Close the profile (this function should handle closing the modal or profile view)
    }
    navigate('/employee'); // Redirect to the '/employee' route
  };

  return (
    <div className="emp-profile">
      <div className="card user-card-full">
        <button className="exit-button" onClick={handleClose}>&times;</button>
        <div className="row m-l-0 m-r-0">
          <div className="col-sm-4 bg-c-lite-green user-profile">
            <div className="card-block text-center text-white">
              <div className="m-b-25">
                <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" />
              </div>
              <h6 className="f-w-600">{employee.name}</h6>
              <p>{employee.position}</p>
              <i className="mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="card-block">
              <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
              <div className="row">
                <div className="col-sm-6">
                  <p className="m-b-10 f-w-600">Contact</p>
                  <h6 className="text-muted f-w-400">{employee.contact}</h6>
                </div>
                <div className="col-sm-6">
                  <p className="m-b-10 f-w-600">Email</p>
                  <h6 className="text-muted f-w-400">{employee.email}</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <p className="m-b-10 f-w-600">LinkedIn</p>
                  <h6 className="text-muted f-w-400">{employee.linkedin}</h6>
                </div>
              </div>
              <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Technologies</h6>
              <div className="row">
                <div className="col-sm-12">
                  <ul className="technologies-list">
                    {employee.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Skills</h6>
              <div className="row">
                <div className="col-sm-12">
                  <ul className="skills-list">
                    {employee.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Education Details</h6>
              <div className="row">
                <div className="col-sm-12">
                  <ul className="education-list">
                    {employee.educationDetails.map((edu, index) => (
                      <li key={index}>
                        <h6>{edu.collegeName} ({edu.collegeCity})</h6>
                        <p>{edu.courseType}, {edu.joiningDate} - {edu.leavingDate}</p>
                        <p>Percentage: {edu.percentage}</p>
                        <p>{edu.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Experience Details</h6>
              <div className="row">
                <div className="col-sm-12">
                  <ul className="experience-list">
                    {employee.experienceDetails.map((exp, index) => (
                      <li key={index}>
                        <h6>{exp.companyName} ({exp.companyCity})</h6>
                        <p>{exp.position}, {exp.joiningDate} - {exp.resigningDate}</p>
                        <p>{exp.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <ul className="social-link list-unstyled m-t-40 m-b-10">
                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpProfile;
