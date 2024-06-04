let employeeData = {
    // Initial employee data structure
    formData: {
      name: '',
      contact: '',
      email: '',
      linkedin: '',
      password: '', // Add password to the state
      technologies: [],
      skills: []
    },
    educationDetails: [
      {
        collegeName: '',
        collegeCity: '',
        joiningDate: '',
        leavingDate: '',
        description: '',
        courseType: '',
        marks: ''
      }
    ],
    experienceDetails: [
      {
        companyName: '',
        companyCity: '',
        joiningDate: '',
        resigningDate: '',
        description: '',
        position: ''
      }
    ]
  };
  
  const updateEmployeeData = (formData) => {
    employeeData.formData = formData;
  };
  
  const updateEducationList = (educationData) => {
    employeeData.educationDetails.push(educationData);
  };
  
  const updateExperienceList = (experienceData) => {
    employeeData.experienceDetails.push(experienceData);
  };
  
  export { employeeData, updateEmployeeData, updateEducationList, updateExperienceList };
  