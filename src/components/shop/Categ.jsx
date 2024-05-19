import React from 'react'

const Categ = () => {
    const data = [
        {
            cateImg: "./images/category/apple.png",
            cateName: "Apple",
        },
        {
            cateImg: "./images/category/samsung.png",
            cateName: "Samsung",
        },
        {
            cateImg: "./images/category/oppo.png",
            cateName: "Oppo",
        },
        {
            cateImg: "./images/category/vivo.png",
            cateName: "Vivo",
        },
        {
            cateImg: "./images/category/redmi.png",
            cateName: "Redimi",
        },
        {
            cateImg: "./images/category/sony.png",
            cateName: "Sony",
        },
    ]

    return (
        <div className='category'>
            <div className='chead d_flex'>
                <h1>Brands </h1>
                <h1>Shops </h1>
            </div>
            {data.map((value, index) => {
                return (
                    <div className='box f_flex' key={index}>
                        <img src={value.cateImg} alt='' />
                        <span>{value.cateName}</span>
                    </div>
                )
            })}
            <div className='box box2'>
                <button>View All Brands</button>
            </div>
        </div>
    )
}

export default Categ