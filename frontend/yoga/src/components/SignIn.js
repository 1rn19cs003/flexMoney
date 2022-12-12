

import React from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Navbar } from './Navbar';
function SignIn() {
  var axios = require('axios');
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Login')
    console.log('submit');
    const { email, password } = e.target.elements;
    var data = {
      email: email.value,
      password: password.value,
    }
    console.log(data);

    var config = {
      method: 'post',
      url: 'http://localhost:8000/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  return (

    <MDBContainer fluid className="p-3 my-5 h-custom">
      <form onSubmit={onSubmit}>
        <Navbar></Navbar>
        <h1>Login Page</h1>
        <MDBRow style={{
          marginTop: "10vh",
          marginLeft: "8vh",
          marginRight: "8vh",
          padding: "2em"
        }}>

          <MDBCol col='10' md='6'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
          </MDBCol>

          <MDBCol col='4' md='6'>


            <MDBInput wrapperClass='mb-4' placeholder='Email address' id='email' type='email' size="lg" />
            <MDBInput wrapperClass='mb-4' placeholder='Password' id='password' type='password' size="lg" />

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="!#">Forgot password?</a>
            </div>

            <div className='text-center text-md-start mt-4 pt-2'>
              <MDBBtn className="mb-0 px-5" size='lg'>{formStatus}</MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">New Admission? <a href="./admission" className="link-danger">Admission</a></p>
            </div>

          </MDBCol>

        </MDBRow>

        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary" style={{
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
          margin: "10px",
          marginLeft: "2vh",
          marginRight: "2vh",
        }}>
        </div>

      </form>
    </MDBContainer>
  );
}

export { SignIn };