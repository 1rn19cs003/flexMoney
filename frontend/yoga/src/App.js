
import './App.css';
import {React} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignIn } from "./components/SignIn";
import {Home} from "./components/Home";
import {ContactUs} from "./components/ContactUs";
import { Admission } from './components/Admission'; 
import {Payment} from './components/Payment';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

function App() {
  return (
    
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/signin" exact element={<SignIn />} />
          <Route path="/contactus" exact element={<ContactUs />} />
          <Route path="/admission" exact element={<Admission />} />
          <Route path="/payment" exact element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
