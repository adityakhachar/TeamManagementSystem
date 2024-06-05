import React from 'react';
import './DataTable.css'; // Import the custom CSS file

const DataTable = ({ companyData }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body text-center">
                            <h5 className="card-title m-b-0">List of companies</h5>
                        </div>
                        <div className="table-responsive">
                            <div className="scrollable-table-container">
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
                                                <td><button className="button">Get more details</button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataTable;
