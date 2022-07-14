import React from 'react';
import {Link} from "react-router-dom";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
function HeaderSwitcher() {
    return (
        <>
            <div className="language-currency  order-1 d-flex">
                <div className="switcher currency switcher-currency" id="switcher-currency">
                    <strong className="label switcher-label"><span>Currency</span></strong>
                    <div className="switcher-content">
                        <div className="action-switcher" id="switcher-currency-trigger">
                            <div className="heading-switcher language-USD">
                                <span>USD <ArrowDropDownIcon /></span>
                            </div>
                        </div>
                        <div className="dropdown-switcher">
                            <ul className="list-item">
                                <li className="currency-EUR switcher-option">
                                    <Link to="#" >EUR - Euro</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="switcher language switcher-language" data-ui-id="language-switcher" id="switcher-language">
                    <strong className="label switcher-label"><span>Language</span></strong>
                    <div className="switcher-content">
                        <div className="action-switcher" id="switcher-language-trigger">
                            <div className="heading-switcher view-french">
                                <span>French <ArrowDropDownIcon /></span>
                            </div>
                        </div>
                        <div className="dropdown-switcher">
                            <ul className="list-item">
                                <li className="view-default switcher-option">
                                    <Link to="#">
                                        <span>English</span>
                                    </Link>
                                </li>
                                <li className="view-german switcher-option">
                                    <Link to="#">
                                        <span>German</span>
                                    </Link>
                                </li>
                                <li className="view-argentina switcher-option">
                                    <Link to="#">
                                        <span>Argentina</span>
                                    </Link>
                                </li>
                                <li className="view-belgium switcher-option">
                                    <Link to="#">
                                        <span>Belgium</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderSwitcher;