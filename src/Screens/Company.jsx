import React, { useState, useEffect } from 'react';
import NavBar from '../util/include/Navbar';
import Footer from '../util/include/Footer';
import DataTable from '../util/components/DataTable';

export default function Company() {
    const [companyData, setCompanyData] = useState([]);

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

    return (
        <div style={{ backgroundColor: '#E0F4FF', color: 'black', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <NavBar />
            <div>
                <DataTable companyData={companyData} />
            </div>
            <Footer />
        </div>
    );
}
