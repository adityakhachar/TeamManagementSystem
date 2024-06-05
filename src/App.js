// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Screens/Home'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import About from './Screens/About.jsx';
import CompanySignupForm from './Screens/CompanySignupForm.jsx';
import CompanySigninForm from './Screens/CompanySigninForm.jsx';
import EmployeeSigninFormm from './Screens/EmployeeSigninForm.jsx';
import EmployeeSignUpForm from './Screens/CompanySignupForm.jsx';
import EmployeeSignupForm from './Screens/EmployeeSignupForm.jsx';
import EmployeeSignup2 from './Screens/EmployeeSignup2.jsx';
import EmployeeSignup3 from './Screens/EmployeeSignup3.jsx';
import Company from './Screens/Company.jsx';
import Employee from './Screens/Employee.jsx';
import CompanyDetails from './Screens/CompanyDetails.jsx';
function App() {
  return (
      <Router>
          <div>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/companysignup" element={<CompanySignupForm/>}/>
                  <Route path="/complogin" element={<CompanySigninForm/>}/>
                  <Route path="/emplogin" element={<EmployeeSigninFormm/>}/>
                  <Route path="/empsignup" element={<EmployeeSignupForm/>}/>      
                  <Route path="/EmployeeSignup2" element={<EmployeeSignup2/>}/>
                  <Route path="/employeesignup3" element={<EmployeeSignup3 />} />
                  <Route path="/company" element={<Company/>} />
                  <Route path="/employee" element={<Employee/>} />
                  <Route path="/company/:id" element={<CompanyDetails />} /> {/* Route for CompanyDetails with ID parameter */}
              </Routes>
          </div>
      </Router>
  );
}

export default App;
