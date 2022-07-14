import React from 'react';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
function VerticalMenu() {
    return (
        <>
            <div className="vertical-menu-block">
                <div className="block-title-menu"><span className='icon'><ListOutlinedIcon /></span> <span>All Categories</span></div>
                <div className="vertical-menu-content">
                    <nav className="sm_megamenu_wrapper_vertical_menu">
                        <div className="sambar-inner">
                            <div className="mega-content">
                                <ul className="vertical-type sm_megamenu_menu">
                                    <li className="sm_megamenu_drop">
                                        <a className="sm_megamenu_drop" href="#">
                                            <span className="sm_megamenu_icon">
                                                <span className="sm_megamenu_title">All Medicines</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="sm_megamenu_drop">
                                        <a className="sm_megamenu_drop" href="#">
                                            <span className="sm_megamenu_icon">
                                                <span className="sm_megamenu_title">Coronavirus Prevention</span>
                                            </span>
                                        </a>
                                        <span className="btn-submobile"></span>
                                    </li>
                                    <li className="sm_megamenu_drop">
                                        <a className="sm_megamenu_drop" href="#">
                                            <span className="sm_megamenu_icon">
                                                <span className="sm_megamenu_title">Fitness</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="sm_megamenu_drop">
                                        <a className="sm_megamenu_drop" href="">
                                            <span className="sm_megamenu_icon">
                                                <span className="sm_megamenu_title">Personal Care</span>
                                            </span>
                                        </a>
                                        <span className="btn-submobile"></span>
                                    </li>
                                    <li className="sm_megamenu_drop">
                                        <a className="sm_megamenu_drop" href="#">
                                            <span className="sm_megamenu_icon">
                                                <span className="sm_megamenu_title">Family Care</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="sm_megamenu_drop">
                                        <a className="sm_megamenu_drop" href="#">
                                            <span className="sm_megamenu_icon">
                                                <span className="sm_megamenu_title">Lifestyle</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="sm_megamenu_drop">
                                        <a className="sm_megamenu_drop" href="#">
                                            <span className="sm_megamenu_icon">
                                                <span className="sm_megamenu_title">Devices</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="sm_megamenu_drop">
                                        <a className="sm_megamenu_drop" href="">
                                            <span className="sm_megamenu_icon">
                                                <span className="sm_megamenu_title">Treatments</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="sm_megamenu_drop">
                                        <a className="sm_megamenu_drop" href="/" id="sm_megamenu_11">
                                            <span className="sm_megamenu_icon">
                                                <span className="sm_megamenu_title">Health Conditions</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="sm_megamenu_drop">
                                        <a className="sm_megamenu_drop" href="#">
                                            <span className="sm_megamenu_icon">
                                                <span className="sm_megamenu_title">Accessories &amp; Supplies</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="sm_megamenu_drop">
                                        <a className="sm_megamenu_head sm_megamenu_drop " href="">
                                            <span className="sm_megamenu_icon">
                                                <span className="sm_megamenu_title">Health &amp; Beauty</span>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="more-w">
                                <span className="more-view">More Categories</span>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default VerticalMenu;