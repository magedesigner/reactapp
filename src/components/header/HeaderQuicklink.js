import React from 'react';

import LocalPhoneOutlinedIcon from '@material-ui/icons/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
function HeaderQuicklink() {
    return (
        <>
            <div className="contact-header order-1 d-flex">
                <ul className="d-flex flex-row">
                    <li className="hotline"><LocalPhoneOutlinedIcon /> Hotline: +7 (098) 508-88-66</li>
                    <li className="address"><LocationOnOutlinedIcon /> Address: 302, Medisine Street, New York, USA</li>
                    <li className="time"><AccessTimeOutlinedIcon /> Mon-Sat: 8:00AM - 6:00PM</li>
                </ul>
            </div>
        </>
    );
}

export default HeaderQuicklink;