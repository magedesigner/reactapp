import React from 'react';

function HorizontalMenu() {
    return (
        <>
            <div className="horizontal-menu">
                <ul className="sm_megamenu_menu">
                    <li className="home-item">
                        <a className="sm_megamenu_head" href="http://magento2.magentech.com/themes/sm_medisine/pub/french/">
                            <span className="sm_megamenu_title">Home</span>
                        </a>
                    </li>
                    <li className="other-toggle ">
                        <a className="sm_megamenu_head sm_megamenu_haschild" href="http://magento2.magentech.com/themes/sm_medisine/pub/french/" id="sm_megamenu_16">
                            <span className="sm_megamenu_title">Features</span>
                        </a>
                        <span className="btn-submobile"></span>
                    </li>
                    <li className="other-toggle">
                        <a className="sm_megamenu_head" href="http://magento2.magentech.com/themes/sm_medisine/pub/french/shop.html"
                            id="sm_megamenu_15">
                            <span className="sm_megamenu_title">Shop</span>
                        </a>
                    </li>
                    <li className="other-toggle">
                        <a className="sm_megamenu_head" href="http://magento2.magentech.com/themes/sm_medisine/pub/blog"
                            id="sm_megamenu_19">
                            <span className="sm_megamenu_title">Blog</span>
                        </a>
                    </li>
                    <li className="other-toggle">
                        <a className="sm_megamenu_head " href="http://magento2.magentech.com/themes/sm_medisine/pub/french/about-us.html"
                            id="sm_megamenu_17">
                            <span className="sm_megamenu_title">About Us</span>
                        </a>
                    </li>
                    <li className="other-toggl">
                        <a className="sm_megamenu_head " href="http://magento2.magentech.com/themes/sm_medisine/pub/contact"
                            id="sm_megamenu_18">
                            <span className="sm_megamenu_title">Contact Us</span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default HorizontalMenu;