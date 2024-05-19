import React, { useEffect, useState } from 'react'
import Tdata from './Tdata'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './top.css'

const TopCart = () => {
    const [slidesToShow, setSlidesToShow] = useState(3);
    const updateSlidesToShow = () => {
        if (window.innerWidth <= 600) {
            setSlidesToShow(1);
        } else if (window.innerWidth <= 900) {
            setSlidesToShow(2);
        } else {
            setSlidesToShow(3);
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
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
    }

    return (
        <>
            <Slider {...settings}>
                {
                    Tdata.map((value, index) => {
                        return (
                            <div className="box product" key={index}>
                                <div className="nametop d_flex">
                                    <span className='tleft'>{value.type}</span>
                                    <span className='tright'>{value.desc}</span>
                                </div>
                                <div className="img">
                                    <img src={value.cover} alt='' />
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </>
    )
}

export default TopCart