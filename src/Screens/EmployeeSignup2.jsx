import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const EmployeeSignup2 = () => {
    const [educationList, setEducationList] = useState([
        {
            collegeName: '',
            collegeCity: '',
            joiningDate: '',
            leavingDate: '',
            description: '',
            courseType: '',
            marks: ''
        }
    ]);

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const list = [...educationList];
        list[index][name] = value;
        setEducationList(list);
    };

    const handleAddClick = () => {
        setEducationList(prevState => [
            ...prevState,
            {
                collegeName: '',
                collegeCity: '',
                joiningDate: '',
                leavingDate: '',
                description: '',
                courseType: '',
                marks: ''
            }
        ]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(educationList);
        // Implement your form submission logic here
    };

    return (
        <div className="vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#E0F4FF' }}>
            <section className="mb-5 h-auto" style={{ width: '100%' }}>
                <div className="container h-custom mt-5 text-dark rounded-3" style={{ borderRadius: '25px', backgroundColor: '#E0F4FF', padding: '20px' }}>
                    <div className="row d-flex justify-content-center align-items-center" style={{ height: 'auto' }}>
                        <div className="col-md-8 col-lg-6 col-xl-6">
                            <div className="signup-container">
                                <h2 className="signup-header mt-2" style={{ textAlign: 'center', marginBottom: '2rem' }}>Education Details</h2>
                                <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', maxHeight: '80vh', overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#C5C5C5 #F0F0F0' }}>
                                    {/* Education Entries */}
                                    {educationList.map((education, index) => (
                                        <div key={index} className="education-block mb-4" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', marginBottom: '15px' }}>
                                            <div className="form-row mb-4" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div className="form-group" style={{ flex: '0 0 48%' }}>
                                                    <label htmlFor={`collegeName-${index}`} className="form-label text-black">College Name</label>
                                                    <input type="text" id={`collegeName-${index}`} name="collegeName" value={education.collegeName} onChange={e => handleChange(index, e)} required style={{
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
                                                    <label htmlFor={`collegeCity-${index}`} className="form-label text-black">College City</label>
                                                    <input type="text" id={`collegeCity-${index}`} name="collegeCity" value={education.collegeCity} onChange={e => handleChange(index, e)} required style={{
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
                                                    <input type="date" id={`joiningDate-${index}`} name="joiningDate" value={education.joiningDate} onChange={e => handleChange(index, e)} required style={{
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
                                                    <label htmlFor={`leavingDate-${index}`} className="form-label text-black">Leaving Date</label>
                                                    <input type="date" id={`leavingDate-${index}`} name="leavingDate" value={education.leavingDate} onChange={e => handleChange(index, e)} required style={{
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
                                                    <label htmlFor={`courseType-${index}`} className="form-label text-black">Course Type</label>
                                                    <select id={`courseType-${index}`} name="courseType" value={education.courseType} onChange={e => handleChange(index, e)} required style={{
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
                                                    }}>
                                                        <option value="" disabled>Select course type</option>
                                                        <option value="BCA">BCA</option>
                                                        <option value="BTech">BTech</option>
                                                        <option value="MCA">MCA</option>
                                                        <option value="MTech">MTech</option>
                                                    </select>
                                                </div>
                                                <div className="form-group" style={{ flex: '0 0 48%' }}>
                                                    <label htmlFor={`marks-${index}`} className="form-label text-black">Percentage/Marks</label>
                                                    <input type="text" id={`marks-${index}`} name="marks" value={education.marks} onChange={e => handleChange(index, e)} required style={{
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
                                                <textarea id={`description-${index}`} name="description" value={education.description} onChange={e => handleChange(index, e)} style={{
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
                                    {/* Add more education button */}
                                    <div className="row mb-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div className="col">
                                            <button type="button" className="btn btn-primary btn-block" onClick={handleAddClick} style={{ width: '100%', padding: '0.5rem', backgroundColor: 'green', color: 'white' }}>Add More Education</button>
                                        </div>
                                    </div>
                                    {/* Submit button */}
                                    <div className="row mb-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div className="col">
                                            <Link type="submit" className="btn btn-primary btn-block" style={{ width: '100%', padding: '0.5rem', backgroundColor: 'rgb(130, 106, 251)', color: 'white' }} to="/EmployeeSignup3">Submit</Link>
                                        </div>
                                    </div>
                                    <p className='text-center mt-3'> 2 of 3</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EmployeeSignup2;
