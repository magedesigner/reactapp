import React from "react";
import logo from './Images/logo.png';
import "../src/components/header/header.css";
import HeaderQuicklink from "./components/header/HeaderQuicklink";
import HeaderSwitcher from "./components/header/HeaderSwitcher";
import VerticalMenu from "./components/header/VerticalMenu";
import HorizontalMenu from "./components/header/HorizontalMenu";
import HeaderRIght from "./components/header/HeaderRIght";
const Header = () => {
    return (
        <>
            <header className="page-header">
                <div className="header-container header-style-2">
                    <div className="header-top">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={logo} alt="Logo" />
                                </div>
                                <div className="col-md-9 ml-auto">
                                    <div className="right-container d-flex justify-content-end">
                                        <HeaderQuicklink />
                                        <HeaderSwitcher />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom ontop-element">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="desktop-menu">
                                    <div className="vertical-block">
                                        <VerticalMenu />
                                    </div>
                                    <div className="horizontal-block">
                                        <HorizontalMenu />
                                    </div>
                                    <div className="right-container">
                                        <HeaderRIght />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;