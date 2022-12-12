import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBRow,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBCol,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import yoga from '../Images/yoga.jpg';
import { Navbar } from './Navbar';
function Home() {
    const [showBasic, setShowBasic] = useState(false);
    return (
        <div>
            <Navbar></Navbar>
            <MDBContainer fluid>
                <MDBCol>
                    <MDBRow>
                        <MDBCol col='10' md='6'>
                        
                            <img src={yoga} style={{
                                width: "90%",
                                marginTop: "80px"
                            }} alt="image" />
                            
                        </MDBCol>
                        <MDBCol col='10' md='6'>
                            <h1 style={{
                                fontSize: "50px",
                                fontWeight: "bold",
                                color: "#f1c40f",
                                marginTop: "50px",
                                marginBottom: "50px",
                            }}>Yoga Classes</h1>
                            <p style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "black",
                                marginTop: "10px",
                                marginBottom: "10px",
                            }}>Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India. Yoga is one of the six orthodox schools of Hindu philosophical traditions. There is a broad variety of yoga schools, practices, and goals in Hinduism, Buddhism, and Jainism.</p>
                            <p style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "black",
                                marginTop: "10px",
                                marginBottom: "10px",
                            }}>Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India. Yoga is one of the six orthodox schools of Hindu philosophical traditions. There is a broad variety of yoga schools, practices, and goals in Hinduism, Buddhism, and Jainism.</p>
                            <p style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "black",
                                marginTop: "10px",
                                marginBottom: "10px",
                            }}>Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India. Yoga is one of the six orthodox schools of Hindu philosophical traditions. There is a broad variety of yoga schools, practices, and goals in Hinduism, Buddhism, and Jainism.</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBBtn href='./contactus' className="mb-0 px-5" style={{
                        backgroundColor: "#f1c40f",
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "20px",
                        borderRadius: "5px",
                        padding: "10px",
                        margin: "10px",
                        boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)"
                    }}>Contact us</MDBBtn>
                    <MDBBtn href='./admission' className="mb-0 px-5" style={{
                        backgroundColor: "#f1c40f",
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "20px",
                        borderRadius: "5px",
                        padding: "10px",
                        margin: "10px",
                        boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)"
                    }}>New Admission</MDBBtn>
                </MDBCol>
            <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary" style={{
                padding:"20px",
                borderRadius:"5px",
                boxShadow:"0 0 10px 0 rgba(0,0,0,0.2)",
                margin:"10px",
                marginLeft:"2vh",
                marginRight:"2vh",
                }}>
            </div>
            </MDBContainer>
        </div>
    );
    // return (
    //     <>
    //         <h1>homepage</h1>    
    //     </>
    // );
}

export { Home };

