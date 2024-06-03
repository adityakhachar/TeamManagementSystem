import React from 'react';
import Navbar from '../util/include/Navbar';
import Carousle from '../util/components/Carousal';
import TicketCard from '../util/components/Seelctcard'; // Corrected import path
import './Home.css'; // Import the CSS file
import Footer from '../util/include/Footer';

const tickets = [
  {
    image: 'https://images.unsplash.com/photo-1578944032637-f09897c5233d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
    title: 'Employee',
    subtitle: 'Team performance exceeds expectations consistently.',
    price: '400.00 €',
    location: 'Montréal, QC',
    date: '12 Juillet 2019',
    disclaimer: 'Ce billet est ni repris, ni échangé, ni remboursé, même en cas de mauvais temps, en cas de perte, de vol ou autres incidents.',
    regurl: 'empsignup'
  },
  {
    image: 'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
    title: 'Company',
    subtitle: 'Team performance exceeds expectations consistently.',
    price: '300.00 €',
    location: 'Toronto, ON',
    date: '15 Août 2019',
    disclaimer: 'Ce billet est ni repris, ni échangé, ni remboursé, même en cas de mauvais temps, en cas de perte, de vol ou autres incidents.',
    regurl: 'companysignup'
  }
];

const greetingText = "Welcome to TeamForge!";
const chooseText = "Are you looking for a company or an employee?";

export default function Home() {
  return (
    <div style={{ backgroundColor: '#E0F4FF', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <div>
        <Carousle />
      </div>
      <div className="home-header" style={{ textAlign: 'center', padding: '20px 0', color: '#222831' }}>
        <h1>{greetingText}</h1>
        <p>{chooseText}</p>
      </div>
      <div className="ticket-list" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '20px 0px' }}>
        {tickets.map((ticket, index) => (
          <TicketCard key={index} {...ticket} style={{ width: '45%', margin: '10px', flex: '1 0 auto' }} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
