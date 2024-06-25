import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CompProfile from '../util/components/CompProfile';

const CompanyDetails = () => {
    const { id } = useParams(); // Ensure useParams is used correctly
    console.log(id);
    const [company, setCompany] = useState(null);

    useEffect(() => {
        const fetchCompanyDetails = async () => {
            try {
                const response = await fetch(`https://teammanagementsystembackend.onrender.com/api/company/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch company details');
                }
                const data = await response.json();
                setCompany(data);
            } catch (error) {
                console.error('Error fetching company details:', error);
            }
        };

        fetchCompanyDetails();
    }, [id]); // Ensure useEffect dependency array includes id

    return (
        <div>
            {company && <CompProfile company={company} />} {/* Render CompProfile if company data is available */}
        </div>
    );
};

export default CompanyDetails;
