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
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';

function Navbar() {
    const [showBasic, setShowBasic] = useState(false);
    return(
        <MDBNavbar expand='lg' light bgColor='light' style={{
            marginLeft:"2vh",
            marginRight:"2vh",
            margin:"2vh",
            borderRadius:"5px",
            padding:"2vh",
            boxShadow:"0 0 10px 0 rgba(0,0,0,0.2)"

        }}>
            <MDBContainer fluid>
                <MDBNavbarBrand href='/'>Yoga</MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <form className='d-flex input-group w-auto'>
                    <MDBNavbarBrand href='./admission'>New Admission ||</MDBNavbarBrand> 
                    <MDBNavbarBrand href='./signin'>Login ||</MDBNavbarBrand>
                    <MDBNavbarBrand href='./contactus'>Contact Us</MDBNavbarBrand>
                </form>
            </MDBContainer>
        </MDBNavbar>
    );
    // return (
    //     <>
    //         <h1>homepage</h1>    
    //     </>
    // );
}

export { Navbar };

