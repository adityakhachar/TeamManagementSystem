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
              </Routes>
          </div>
      </Router>
  );
}

export default App;
