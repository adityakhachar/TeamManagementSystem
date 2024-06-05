import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DataTable.css'; // Import the custom CSS file

const DataTable = ({ companyData, searchTerm, handleSearch }) => {
    const navigate = useNavigate();

    return (
        <div className="card">
            <div className="card-body d-flex justify-content-between align-items-center">
                <h5 className="card-title m-0">List of companies</h5>
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
                            <th scope="col">Company Name</th>
                            <th scope="col">City</th>
                            <th scope="col">Address</th>
                            <th scope="col">Description</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="customtable">
                        {companyData.map((company, index) => (
                            <tr key={index}>
                                <td>{company.companyName}</td>
                                <td>{company.city}</td>
                                <td>{company.location}</td>
                                <td className="description-cell">{company.description}</td>
                                <td>
                                    <button className="button" onClick={() => navigate(`/company/${company._id}`)}>Get more details</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;
