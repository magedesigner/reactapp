import React from 'react';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
function HeaderRIght() {
    return (
        <>
            <div className="header-account">
                <PersonOutlineIcon />
                <div className="drop-account">
                    <ul className="header links">
                        <li className="link authorization-link">
                            <a href="">Login</a>
                        </li>
                        <li><a href="">Register</a></li>
                    </ul>
                </div>
            </div>
            <div className="search-container">
                <a href="/" className="icon-search1">
                    <span className="hidden">
                        <SearchIcon />
                    </span>
                </a>
                <div className="search-wrapper">
                    <div id="sm_searchbox13978706431656572080" className="block block-search search-pro">
                        <div className="block block-content">
                            <form className="form minisearch" id="searchbox_mini_form" method="get">
                                <div className="field search">
                                    <div className="control">
                                        <input type="text" 
                                               name="search" 
                                               placeholder="Enter keywords to search..." 
                                               className="input-text input-searchbox" />
                                            <div id="searchbox_autocomplete" className="search-autocomplete"></div>
                                    </div>
                                </div>
                                <div className="actions">
                                    <button type="submit" title="Search" className="btn-searchbox">
                                        <span>Search</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-wishlist link wishlist">
                <a href="https://magento2.magentech.com/themes/sm_medisine/pub/french/wishlist/">
                    <FavoriteBorderIcon />
                    <span className="counter qty"></span>
                </a>
            </div>
            <div className="minicart-header" data-move="minicart-mobile">
                <div data-block="minicart" className="minicart-wrapper">
                    <a className="action showcart" href="https://magento2.magentech.com/themes/sm_medisine/pub/french/checkout/cart/">
                        <ShoppingCartOutlinedIcon />
                        <span className="counter qty empty">
                            <span className="counter-number">0</span>
                        </span>
                    </a>
                </div>
            </div>
        </>
    );
}

export default HeaderRIght;