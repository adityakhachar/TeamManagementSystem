import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EmpProfile from '../util/components/EmpProfile';

const EmployeeDetails = () => {
    const { id } = useParams(); // Ensure useParams is used correctly
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        const fetchEmployeeDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/employee/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch employee details');
                }
                const data = await response.json();
                setEmployee(data);
            } catch (error) {
                console.error('Error fetching employee details:', error);
            }
        };

        fetchEmployeeDetails();
    }, [id]); // Ensure useEffect dependency array includes id

    return (
        <div>
            {employee && <EmpProfile employee={employee} />} {/* Render EmpProfile if employee data is available */}
        </div>
    );
};

export default EmployeeDetails;
