import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CompareArrowsOutlinedIcon from '@material-ui/icons/CompareArrowsOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function Card(props) {
    return (
        <>
            <div className="item product product-item">
                <div className="product-item-info">
                    <div className="image-product">
                        <a href="#" className="product photo product-item-photo">
                            <span className="product-image-container product-image-container-20">
                                <img className="product-image-photo" src={props.imgsrc} alt="{props.pname}" />
                            </span>
                        </a>
                    </div>
                    <div className="product details product-item-details">
                        <div className="category-name"> <a href="#">{props.category}</a>
                        </div>
                        <strong className="product name product-item-name">
                            <a className="product-item-link" href="#">
                               {props.pname} </a>
                        </strong>
                        <div className="price-box price-final_price">
                            <span className="price-container price-final_price tax weee">
                                <span className="price-wrapper ">
                                    <span className="price">{props.price}</span>
                                </span>
                            </span>
                        </div>
                        <div className="product-item-actions">
                            <div className="actions-primary">
                                <form>
                                    <button type="submit" title="Add to Cart" className="action tocart primary">
                                        <ShoppingCartOutlinedIcon title="Add to Cart" />
                                    </button>
                                </form>
                            </div>
                            <div className="actions-secondary">
                                <a href="#" className="action towishlist" data-action="add-to-wishlist"
                                    title="Add to Wish List">
                                    <FavoriteBorderIcon />
                                </a>
                                <a href="#" className="action tocompare" title="Add to Compare">
                                    <CompareArrowsOutlinedIcon />
                                </a>
                                <a className="action quickview-handler" title="Quick view" href="#">
                                    <SearchIcon title="Quick view" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;