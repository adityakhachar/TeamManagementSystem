import React from 'react';
import './DataTable.css'; // Import the custom CSS file

const EmpData = ({ employeeData, searchTerm, handleSearch, handleShowEmpProfile }) => {
    return (
        <div className="card">
            <div className="card-body d-flex justify-content-between align-items-center">
                <h5 className="card-title m-0">List of Employees</h5>
                <div className="search-bar">
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
            </div>
            <div className="table-responsive">
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Technologies</th>
                            <th scope="col">Skills</th>
                            <th scope="col">Linkedin Profile</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="customtable">
                        {employeeData.map((employee, index) => (
                            <tr key={index}>
                                <td>{employee.name}</td>
                                <td>{Array.isArray(employee.technologies) ? employee.technologies.join(', ') : employee.technologies}</td>
                                <td>{Array.isArray(employee.skills) ? employee.skills.join(', ') : employee.skills}</td>
                                <td><a href={employee.linkedin} target="_blank" rel="noopener noreferrer">{employee.linkedin}</a></td>
                                <td>
                                    <button 
                                        className="button" 
                                        onClick={() => handleShowEmpProfile(employee)}
                                    >
                                        Get more details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmpData;
