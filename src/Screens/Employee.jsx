import React, { useState, useEffect } from 'react';
import NavBar from '../util/include/Navbar';
import Footer from '../util/include/Footer';
import EmpData from '../util/components/EmpData'; // Ensure correct path
import EmpProfile from '../util/components/EmpProfile'; // Ensure correct path
import { useNavigate } from 'react-router-dom';

export default function Employee() {
    const [employeeData, setEmployeeData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedEmployee, setSelectedEmployee] = useState(null); // State to track the selected employee
    const navigate = useNavigate();
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleShowEmpProfile = (employee) => {
        console.log('Button clicked', employee); // Add this line
        setSelectedEmployee(employee); // Set the selected employee to display the profile
        navigate(`/employee/${employee._id}`);
    };

    const handleCloseProfile = () => {
        setSelectedEmployee(null); // Close the employee profile view
    };

    const loadEmployee = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/employee/getEmp", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            setEmployeeData(data); // Assuming data is an array of employee objects
        } catch (error) {
            console.error('Error loading employee data:', error);
        }
    };

    useEffect(() => {
        loadEmployee();
    }, []);

    const filteredEmployeeData = employeeData.filter(item => {
        const name = item.name ? item.name.toLowerCase() : '';
        const technologies = Array.isArray(item.technologies) 
            ? item.technologies.join(' ').toLowerCase() 
            : (item.technologies ? item.technologies.split(',').map(t => t.trim().toLowerCase()).join(' ') : '');
        const skills = Array.isArray(item.skills) 
            ? item.skills.join(' ').toLowerCase() 
            : (item.skills ? item.skills.split(',').map(s => s.trim().toLowerCase()).join(' ') : '');
        
        return (
            name.includes(searchTerm.toLowerCase()) ||
            technologies.includes(searchTerm.toLowerCase()) ||
            skills.includes(searchTerm.toLowerCase())
        );
    });

    return (
        <div className={`container-wrapper ${selectedEmployee ? 'blur' : ''}`}>
            <div style={{ backgroundColor: '#E0F4FF', color: 'black', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <NavBar />
                <div className="container" style={{ flex: '1 0 auto' }}>
                    <EmpData 
                        employeeData={filteredEmployeeData} 
                        searchTerm={searchTerm} 
                        handleSearch={handleSearch}
                        handleShowEmpProfile={handleShowEmpProfile} // Pass the handleShowEmpProfile function
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
            {selectedEmployee && (
                <div className="profile-overlay">
                    <EmpProfile employee={selectedEmployee} onClose={handleCloseProfile} />
                </div>
            )}
        </div>
    );
}
