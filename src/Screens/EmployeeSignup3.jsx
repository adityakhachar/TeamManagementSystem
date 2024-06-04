import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
// import { updateExperienceList} from './globalData';
const EmployeeSignup3 = () => {
    const [experienceList, setExperienceList] = useState([
        {
            companyName: '',
            companyCity: '',
            joiningDate: '',
            resigningDate: '',
            description: '',
            position: ''
        }
    ]);

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const list = [...experienceList];
        list[index][name] = value;
        setExperienceList(list);
    };

    const handleAddClick = () => {
        setExperienceList(prevState => [
            ...prevState,
            {
                companyName: '',
                companyCity: '',
                joiningDate: '',
                resigningDate: '',
                description: '',
                position: ''
            }
        ]);
    };
    let navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(experienceList);
        const Data = experienceList;
        global.fData[0].experienceDetails = [...global.fData[0].experienceDetails,...Data];
        console.log(global.fData); 
        const response = await fetch("http://localhost:5000/api/employee/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(global.fData[0])
        });
        const json = await response.json();
        console.log(json);
        if (!json.status === 201) {
            alert("Enter valid data!!");
        }
        else {
            alert("Registered!!");
            navigate('/');
        }
        // updateExperienceList(experienceList);
        // Implement your form submission logic here
    };

    return (
        <div className="vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#E0F4FF' }}>
            <section className="mb-5 h-auto" style={{ width: '100%' }}>
                <div className="container h-custom mt-5 text-dark rounded-3" style={{ borderRadius: '25px', backgroundColor: '#E0F4FF', padding: '20px' }}>
                    <div className="row d-flex justify-content-center align-items-center" style={{ height: 'auto' }}>
                        <div className="col-md-8 col-lg-6 col-xl-6">
                            <div className="signup-container">
                                <h2 className="signup-header mt-2" style={{ textAlign: 'center', marginBottom: '2rem' }}>Experience Details</h2>
                                <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', maxHeight: '80vh', overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#C5C5C5 #F0F0F0' }}>
                                    {/* Experience Entries */}
                                    {experienceList.map((experience, index) => (
                                        <div key={index} className="experience-block mb-4" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', marginBottom: '15px' }}>
                                            <div className="form-row mb-4" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div className="form-group" style={{ flex: '0 0 48%' }}>
                                                    <label htmlFor={`companyName-${index}`} className="form-label text-black">Company Name</label>
                                                    <input type="text" id={`companyName-${index}`} name="companyName" value={experience.companyName} onChange={e => handleChange(index, e)} required style={{
                                                        width: '100%',
                                                        padding: '0.5rem',
                                                        borderRadius: '0.25rem',
                                                        backgroundColor: 'white',
                                                        color: 'black',
                                                        border: '2px solid rgb(221, 221, 221)',
                                                        outline: 'none',
                                                        fontSize: '1rem',
                                                        marginTop: '8px',
                                                        paddingLeft: '15px',
                                                        paddingRight: '15px',
                                                    }} />
                                                </div>
                                                <div className="form-group" style={{ flex: '0 0 48%' }}>
                                                    <label htmlFor={`companyCity-${index}`} className="form-label text-black">Company City</label>
                                                    <input type="text" id={`companyCity-${index}`} name="companyCity" value={experience.companyCity} onChange={e => handleChange(index, e)} required style={{
                                                        width: '100%',
                                                        padding: '0.5rem',
                                                        borderRadius: '0.25rem',
                                                        backgroundColor: 'white',
                                                        color: 'black',
                                                        border: '2px solid rgb(221, 221, 221)',
                                                        outline: 'none',
                                                        fontSize: '1rem',
                                                        marginTop: '8px',
                                                        paddingLeft: '15px',
                                                        paddingRight: '15px',
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="form-row mb-4" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div className="form-group" style={{ flex: '0 0 48%' }}>
                                                    <label htmlFor={`joiningDate-${index}`} className="form-label text-black">Joining Date</label>
                                                    <input type="date" id={`joiningDate-${index}`} name="joiningDate" value={experience.joiningDate} onChange={e => handleChange(index, e)} required style={{
                                                        width: '100%',
                                                        padding: '0.5rem',
                                                        borderRadius: '0.25rem',
                                                        backgroundColor: 'white',
                                                        color: 'black',
                                                        border: '2px solid rgb(221, 221, 221)',
                                                        outline: 'none',
                                                        fontSize: '1rem',
                                                        marginTop: '8px',
                                                        paddingLeft: '15px',
                                                        paddingRight: '15px',
                                                    }} />
                                                </div>
                                                <div className="form-group" style={{ flex: '0 0 48%' }}>
                                                    <label htmlFor={`resigningDate-${index}`} className="form-label text-black">Resigning Date</label>
                                                    <input type="date" id={`resigningDate-${index}`} name="resigningDate" value={experience.resigningDate} onChange={e => handleChange(index, e)} required style={{
                                                        width: '100%',
                                                        padding: '0.5rem',
                                                        borderRadius: '0.25rem',
                                                        backgroundColor: 'white',
                                                        color: 'black',
                                                        border: '2px solid rgb(221, 221, 221)',
                                                        outline: 'none',
                                                        fontSize: '1rem',
                                                        marginTop: '8px',
                                                        paddingLeft: '15px',
                                                        paddingRight: '15px',
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="form-row mb-4">
                                                <div className="form-group" style={{ flex: '1 1 100%' }}>
                                                    <label htmlFor={`position-${index}`} className="form-label text-black">Position</label>
                                                    <input type="text" id={`position-${index}`} name="position" value={experience.position} onChange={e => handleChange(index, e)} required style={{
                                                        width: '100%',
                                                        padding: '0.5rem',
                                                        borderRadius: '0.25rem',
                                                        backgroundColor: 'white',
                                                        color: 'black',
                                                        border: '2px solid rgb(221, 221, 221)',
                                                        outline: 'none',
                                                        fontSize: '1rem',
                                                        marginTop: '8px',
                                                        paddingLeft: '15px',
                                                        paddingRight: '15px',
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="form-group mb-4">
                                                <label htmlFor={`description-${index}`} className="form-label text-black">Description</label>
                                                <textarea id={`description-${index}`} name="description" value={experience.description} onChange={e => handleChange(index, e)} required style={{
                                                        width: '100%',
                                                        padding: '0.5rem',
                                                        borderRadius: '0.25rem',
                                                        backgroundColor: 'white',
                                                        color: 'black',
                                                        border: '2px solid rgb(221, 221, 221)',
                                                        outline: 'none',
                                                        fontSize: '1rem',
                                                        marginTop: '8px',
                                                        paddingLeft: '15px',
                                                        paddingRight: '15px',
                                                    }}></textarea>
                                            </div>
                                        </div>
                                    ))}
                                    {/* Add more experience button */}
                                    <div className="row mb-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div className="col">
                                            <button type="button" className="btn btn-primary btn-block" onClick={handleAddClick} style={{ width: '100%', padding: '0.5rem', backgroundColor: 'green', color: 'white' }}>Add More Experience</button>
                                        </div>
                                    </div>
                                    {/* Submit button */}
                                    <div className="row mb-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div className="col">
                                            <button type="submit" className="btn btn-primary btn-block" style={{ width: '100%', padding: '0.5rem', backgroundColor: 'rgb(130, 106, 251)', color: 'white' }} to="/">Submit</button>
                                        </div>
                                    </div>
                                    <p className='text-center mt-3'> 3 of 3</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EmployeeSignup3;
