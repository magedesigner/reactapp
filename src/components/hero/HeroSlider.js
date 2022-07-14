import React from 'react';
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./slider.css";

function HeroSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };    
    return (
        <div>
             <Slider {...settings}>
                <div>
                    <img src="http://magento2.magentech.com/themes/sm_medisine/pub/media/wysiwyg/slidershow/home-2/item-2.jpg" alt="" />
                </div>
                <div>
                <img src="http://magento2.magentech.com/themes/sm_medisine/pub/media/wysiwyg/slidershow/home-2/item-2.jpg" alt="" />
                </div>
                <div>
                    <img src="http://magento2.magentech.com/themes/sm_medisine/pub/media/wysiwyg/slidershow/home-2/item-2.jpg" alt="" />
                </div>
                <div>
                    <img src="http://magento2.magentech.com/themes/sm_medisine/pub/media/wysiwyg/slidershow/home-2/item-2.jpg" alt="" />   
                </div>
                <div>
                    <img src="http://magento2.magentech.com/themes/sm_medisine/pub/media/wysiwyg/slidershow/home-2/item-2.jpg" alt="" />
                </div>
                <div>
                    <img src="http://magento2.magentech.com/themes/sm_medisine/pub/media/wysiwyg/slidershow/home-2/item-2.jpg" alt="" />
                </div>
                </Slider>
        </div>
    );
}

export default HeroSlider;