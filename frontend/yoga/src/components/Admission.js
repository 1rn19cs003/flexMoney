import React, { useState } from 'react';
import "../App.css"
import { Navbar } from './Navbar';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';

import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBDropdown,
    MDBDropdownToggle,
    MDBListGroup, MDBListGroupItem,
}
    from 'mdb-react-ui-kit';
const Admission = () => {
    var batch_ex;
    const batches=[
        {
            label: '6 AM - 7 AM',
            value: 'batch1',
        },
        {
            label: '7 AM - 8 AM',
            value: 'batch2',
        },
        {
            label: '8 AM - 9 AM',
            value: 'batch3',
        },
        {
            label: '5 PM - 6 PM',
            value: 'batch4',
        },
    ]
    const [value, setValues] = useState('batches');
    const handleChange=(e)=>{
        console.log(e.target.value)
        // console.log(btch)
        let p;
        
        for(p in batches)
        {
            // console.log(batches[p].value , batches[p].label);
            if(batches[p].value===e.target.value)
            {
                batch_ex =batches[p].label;
                // console.log(batches[p].label);
                break;
            }
        }
        console.log(batch_ex);
    

        //  if(value!=="")
        //  {
        //     setValues({
        //         ...value,
        //         [btch]:e.target.value,
        //     })
        //  }
        //  else
        //  {
        //         setValues({
        //             ...value,
        //             [btch]:""
        //         })
        //  }


    }
    const bach=batch_ex;
    var axios = require('axios');

    const [formStatus, setFormStatus] = React.useState('Next')
    const onSubmit = (e) => {
        e.preventDefault();
        setFormStatus('Next')
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const phone = document.getElementById('phone').value
        const age = document.getElementById('age').value
        // batch_ex = document.getElementById('batch').value
        console.log(bach);
        const password = document.getElementById('password').value
        var data = {
            name: name,
            email: email,
            phoneno: phone,
            age: age,
            batch: batch_ex,
            password: password
        }
        console.log(data)
        var config = {
            method: 'post',
            withCredentials: true,
            url: 'http://localhost:8000/admission',
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
        <MDBContainer fluid className="p-3 my-5">
            <Navbar></Navbar>
            <h1>Admission</h1>
            <form onSubmit={onSubmit}>
                <MDBRow style={{
                    marginTop: "10vh",
                    marginLeft: "8vh",
                    marginRight: "8vh",
                    padding: "2em"
                }}>

                    <MDBCol col='10' md='6'>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
                    </MDBCol>

                    <MDBCol col='4' md='6'>

                        
                        <MDBInput wrapperClass='mb-4' placeholder='Name' id='name' type='name' required="true" size="lg" />
                        <MDBInput wrapperClass='mb-4' placeholder='Email address' id='email' required="true" type='email' size="lg" />
                        <MDBInput wrapperClass='mb-4' placeholder='Phone number' id='phone' required="true" type='phone' size="lg" />
                        <MDBInput wrapperClass='mb-4' placeholder='Age' id='age'
                            min="18"
                            max="65" required="true" type='number' size="lg" />

                        <Grid item xs={4}>
                            <TextField
                                id='time'
                                select
                                label='batch'
                                name='batch'
                                value={value.batch}
                                onChange={handleChange}
                                helperText="Please select your batch"
                            >
                                {batches.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <MDBInput wrapperClass='mb-4' placeholder='password' required="true" id='password' type='password' size="lg" />
                        <div className="d-flex justify-content-between mx-4 mb-4">
                            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                            <a href="!#">Forgot password?</a>
                        </div>

                        <MDBBtn className="mb-4 w-100" >{formStatus}</MDBBtn>


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
    // return (

    //     <>
    //         <div className="Admisson" style={{
    //             height: "100vh",
    //             backgroundImage:
    //                 "linear-gradient(to right, #427ceb, #1dad6f)",
    //         }}>
    //             <h1>Admission</h1>
    //             <div className='Name'>
    //                 <label htmlFor="Name" style={{
    //                     margin: "5px",
    //                     padding: "10px",
    //                 }}>Name</label>
    //                 <input type="text" placeholder="Name" /><br></br>
    //             </div>
    //             <div>
    //                 <label htmlFor="E-mail">E-mail</label>
    //                 <input type="text" placeholder="Email" /> <br />
    //             </div>
    //             <div>
    //                 <label htmlFor="Phone">Phone</label>
    //                 <input type="text" placeholder="phone Number" /> <br />
    //             </div>
    //             <div>
    //                 <label htmlFor="Age">Age</label>
    //                 <input type="text" placeholder="Age" /> <br />
    //             </div>
    //             <div>
    //                 <label htmlFor="Batch">Batch</label>
    //                 <input type="list" placeholder="Batch"></input> <br />
    //             </div>
    //             <div>
    //                 <label htmlFor="Password">Password</label>
    //                 <input type="list" placeholder="Passowrd"></input> <br />
    //             </div>
    //             <button>Submit</button>
    //         </div>
    //     </>
    // );
}

export { Admission };