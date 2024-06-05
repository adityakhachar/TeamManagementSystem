import React, { useState, useEffect } from 'react';
import NavBar from '../util/include/Navbar';
import Footer from '../util/include/Footer';
import DataTable from '../util/components/DataTable';

export default function Company() {
    const [companyData, setCompanyData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const loadCompany = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/company/getComp", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            setCompanyData(data); // Assuming data is an array of company objects
        } catch (error) {
            console.error('Error loading company data:', error);
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
        <div style={{ backgroundColor: '#E0F4FF', color: 'black', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <NavBar />
            <div className="container">
                <DataTable companyData={filteredCompanyData} searchTerm={searchTerm} handleSearch={handleSearch} />
            </div>
            <Footer style={{ 
                backgroundColor: '#f1f1f1', 
                textAlign: 'center', 
                padding: '1rem', 
                borderTop: '1px solid #ccc',
                marginTop: 'auto' // Pushes footer to the bottom
            }} />
        </div>
    );
}
