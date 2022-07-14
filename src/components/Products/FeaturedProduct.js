import React from 'react';
import "./product-card.css";
import Card from './Card';
import {Productdata,Productsection} from "./Productdata";

function FeaturedProduct() {
    return (
        <>
            <div className="block-home">
                <div className="container">
                    <div className="block block-filterproducts">
                        <div className="block-title">
                            {
                                Productsection.map( (val, indx) =>{
                                    return <>
                                    <strong>{val.blockname}</strong>
                                    <p className="posttext">{val.blockdescription}</p>
                                    </>
                                })
                            }
                        </div>
                        <div className="block-content">
                            <div id="filterproducts_0" className="products wrapper grid products-grid">
                                <div className="products list items product-items filterproducts">
                                    {
                                        Productdata.map( (val,indx) =>{
                                            return <Card imgsrc={val.imgsrc} category={val.category} pname={val.pname} price={val.price} key={indx} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeaturedProduct