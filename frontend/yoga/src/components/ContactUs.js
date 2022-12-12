import React, { useEffect, useRef, googleMapRef } from 'react';
import { Navbar } from './Navbar';
const GoogleMap = ({ placeName }) => {
    const googleMapRef = useRef();
    let googleMap;
    // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0860187187222!2d77.51639331479215!3d12.90219019090147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fa7243af9c3%3A0x9bed6669a38d1c3!2sRNS%20INSTITUTE%20OF%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1670798005281!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    useEffect(() => {
        const googleMapScript = document.createElement("script");
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0860187187222!2d77.51639331479215!3d12.90219019090147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fa7243af9c3%3A0x9bed6669a38d1c3!2sRNS%20INSTITUTE%20OF%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1670798005281!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'}&libraries=places`;
        googleMapScript.async = true;
        window.document.body.appendChild(googleMapScript);
        googleMapScript.addEventListener("load", () => {
            getLatLng();
        });
    }, []);

    const createGoogleMap = (coordinates) => {
        googleMap = new window.google.maps.Map(googleMapRef.current, {
            zoom: 16,
            center: {
                lat: coordinates.lat(),
                lng: coordinates.lng(),
            },
            disableDefaultUI: true,
        });
    };
    const getLatLng = () => {
        let lat, lng, placeId;
        new window.google.maps.Geocoder().geocode(
            { address: `${placeName}` },
            function (results, status) {
                if (status === window.google.maps.GeocoderStatus.OK) {
                    placeId = results[0].place_id;
                    createGoogleMap(results[0].geometry.location);
                    lat = results[0].geometry.location.lat();
                    lng = results[0].geometry.location.lng();
                    new window.google.maps.Marker({
                        position: { lat, lng },
                        map: googleMap,
                        animation: window.google.maps.Animation.DROP,
                        title: `${placeName}`,
                    });
                } else {
                    alert(
                        "Geocode was not successful for the following reason: " + status
                    );
                }
            }
        );
    };
};
const ContactUs = () => {


    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }
    return (
        <div>
            <div>

                <Navbar></Navbar>
                <div className="container mt-5 " col='4' md='6' style={{
                    maxWidth: '40%',
                    padding: '20px',
                    margin: "2em",
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    float: "right",

                }}>

                    <h2 className="mb-3">Contact Us</h2>
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">
                                Name
                            </label>
                            <input className="form-control" type="text" id="name" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">
                                Email
                            </label>
                            <input className="form-control" type="email" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="message">
                                Message
                            </label>
                            <textarea className="form-control" id="message" required />
                        </div>
                        <button className="btn btn-danger" type="submit">
                            {formStatus}
                        </button>
                    </form>
                </div>
                <div className="container mt-5 " col='4' md='6' style={{}}>
                    <div
                        id="google-map"
                        ref={googleMapRef}
                        style={{ width: "400px", height: "300px" }}
                    />
                </div>
            </div>

        </div>

    )
}
export { ContactUs };