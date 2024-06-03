import React from 'react';
import './TicketCard.css'; // Import the CSS file

function TicketCard({ image, title, subtitle, location, date, disclaimer, regurl }) {
  return (
    <li className="booking-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="book-container">
        <div className="content">
          <button className="btn" onClick={() => window.location.href = regurl}>Register</button>
        </div>
      </div>
      <div className="informations-container">
        <h2 className="title">{title}</h2>
        <p className="sub-title">{subtitle}</p>
        <div className="more-information">
          <div className="info-and-date-container">
            <div className="box info">
              <svg className="icon" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
              </svg>
              <p>{location}</p>
            </div>
            <div className="box date">
              <svg className="icon" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
              </svg>
              <p>{date}</p>
            </div>
          </div>
          <p className="disclaimer">{disclaimer}</p>
        </div>
      </div>
    </li>
  );
}

export default TicketCard;
