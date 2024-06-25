import React, { useState, useEffect } from 'react';
import NavBar from '../util/include/Navbar';
import Footer from '../util/include/Footer';
import DataTable from '../util/components/DataTable';
import CompProfile from '../util/components/CompProfile'; // Import the CompProfile component
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

export default function Company() {
    const [companyData, setCompanyData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCompany, setSelectedCompany] = useState(null); // State to track the selected company
    const navigate = useNavigate(); // Initialize useNavigate hook for navigation

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleShowProfile = (company) => {
        setSelectedCompany(company); // Set the selected company to display the profile
        // Redirect to company details page with the company's id
        navigate(`/company/${company._id}`);
    };

    const handleCloseProfile = () => {
        setSelectedCompany(null); // Close the profile view
    };

    const loadCompany = async () => {
    try {
        const response = await fetch("https://teammanagementsystembackend.onrender.com/api/company/getcomp", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setCompanyData(data); // Assuming data is an array of company objects
    } catch (error) {
        console.error('Error loading company data:', error);
        // Handle error appropriately, such as setting an error state or displaying a message to the user
    }
};

    useEffect(() => {
        loadCompany();
    }, []);

    const filteredCompanyData = companyData.filter(item =>
        item.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={`container-wrapper ${selectedCompany ? 'blur' : ''}`}>
            <div style={{ backgroundColor: '#E0F4FF', color: 'black', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <NavBar />
                <div className="container">
                    <DataTable 
                        companyData={filteredCompanyData} 
                        searchTerm={searchTerm} 
                        handleSearch={handleSearch} 
                        handleShowProfile={handleShowProfile} // Pass the handleShowProfile function
                    />
                </div>
                <Footer style={{ 
                    backgroundColor: '#f1f1f1', 
                    textAlign: 'center', 
                    padding: '1rem', 
                    borderTop: '1px solid #ccc',
                    marginTop: 'auto' // Pushes footer to the bottom
                }} />
            </div>
            {selectedCompany && (
                <div className="profile-overlay">
                    <CompProfile company={selectedCompany} onClose={handleCloseProfile} />
                </div>
            )}
        </div>
    );
}
    
