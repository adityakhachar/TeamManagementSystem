import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css'; // Import the custom CSS file for styles

const CompProfile = ({ company, onClose }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    if (typeof onClose === 'function') {
      onClose(); // Close the profile (this function should handle closing the modal or profile view)
    }
    navigate('/company'); // Redirect to the '/company' route
  };

  return (
    <div className="comp-profile">
      <div className="card user-card-full">
        <div className="row m-l-0 m-r-0">
          <div className="col-sm-4 bg-c-lite-green user-profile">
            <div className="card-block text-center text-white">
              <div className="m-b-25">
                <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" />
              </div>
              <h6 className="f-w-600">{company.companyName}</h6>
              <p>{company.role}</p>
              <i className="mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="card-block">
              <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
              <div className="row">
                <div className="col-sm-6">
                  <p className="m-b-10 f-w-600">City</p>
                  <h6 className="text-muted f-w-400">{company.city}</h6>
                </div>
                <div className="col-sm-6">
                  <p className="m-b-10 f-w-600">Address</p>
                  <h6 className="text-muted f-w-400">{company.location}</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <p className="m-b-10 f-w-600">Company Email</p>
                  <h6 className="text-muted f-w-400">{company.companyEmail}</h6>
                </div>
                <div className="col-sm-6">
                  <p className="m-b-10 f-w-600">Director Name</p>
                  <h6 className="text-muted f-w-400">{company.directorName}</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <p className="m-b-10 f-w-600">Number of Projects</p>
                  <h6 className="text-muted f-w-400">{company.numberOfProjects}</h6>
                </div>
                <div className="col-sm-6">
                  <p className="m-b-10 f-w-600">Number of Employees</p>
                  <h6 className="text-muted f-w-400">{company.numberOfEmployees}</h6>
                </div>
              </div>
              <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Technologies</h6>
              <div className="row">
                <div className="col-sm-12">
                  <ul className="technologies-list">
                    {company.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
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
      <button className="exit-button" onClick={handleClose}>Close</button>
    </div>
  );
};

export default CompProfile;
