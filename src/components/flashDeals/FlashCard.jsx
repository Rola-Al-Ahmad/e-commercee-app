import React, { useState, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='next'>
                <i className="fa-solid fa-arrow-right-long"></i>
            </button>
        </div>
    )
}
const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='prev'>
                <i className="fa-solid fa-arrow-left-long"></i>
            </button>
        </div>
    )
}
const FlashCard = ({ productItems, addToCart }) => {
    const [count, setCount] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(4);

    const increment = () => {
        setCount(count + 1)
    }

    const updateSlidesToShow = () => {
        if (window.innerWidth <= 600) {
            setSlidesToShow(1);
        } else if (window.innerWidth <= 900) {
            setSlidesToShow(2);
        } else {
            setSlidesToShow(4);
        }
    };
    
    useEffect(() => {
        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);
        return () => window.removeEventListener('resize', updateSlidesToShow);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }

    return (
        <>
            <Slider {...settings}>
                {productItems.map((productItems) => {
                    return (
                        <div className='box' key={productItems.id}>
                            <div className='product mtop'>
                                <div className='img'>
                                    <span className='discount'>{productItems.discount}% Off</span>
                                    <img src={productItems.cover} alt='' />
                                    <div className='product-like'>
                                        <label>{count}</label> <br />
                                        <i className='fa-regular fa-heart' onClick={increment}></i>
                                    </div>
                                </div>
                                <div className='product-details'>
                                    <h3>{productItems.name}</h3>
                                    <div className='rate'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                    </div>
                                    <div className='price'>
                                        <h4>${productItems.price}.00 </h4>
                                        {/* step : 3  
                                            if hami le button ma click garryo bahne 
                                        */}
                                        <button onClick={() => addToCart(productItems)}>
                                            <i className='fa fa-plus'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </>
    )
}

export default FlashCard