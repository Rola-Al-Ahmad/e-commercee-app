import React,{useState, useEffect} from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Ddata from "./Ddata"
import "../newArrivals/newArrivals.css"

const DisCard = () => {
    const [slidesToShow, setSlidesToShow] = useState(6);
    const updateSlidesToShow = () => {
        if (window.innerWidth <= 600) {
            setSlidesToShow(1);
        } else if (window.innerWidth <= 900) {
            setSlidesToShow(2);
        } else if(window.innerWidth <= 1000){
            setSlidesToShow(3);
        }else if(window.innerWidth <= 1500){
            setSlidesToShow(4);
        }else {
            setSlidesToShow(6);
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
        autoplay: true,
    }
    return (
        <>
            <Slider {...settings}>
                {Ddata.map((value, index) => {
                    return (
                        <>
                            <div className='box product' key={index}>
                                <div className='img'>
                                    <img src={value.cover} alt='' width='100%' />
                                </div>
                                <div className='title d_flex'>
                                    <h4>{value.name}</h4>
                                    <span>{value.price}</span>
                                </div>
                            </div>
                        </>
                    )
                })}
            </Slider>
        </>
    )
}

export default DisCard