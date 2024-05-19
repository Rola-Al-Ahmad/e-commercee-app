import React from "react"
import DisCard from "./DisCard"

const Discount = () => {
    return (
        <>
            <section className='Discount background newArrivals'>
                <div className='container'>
                    <div className='heading d_flex'>
                        <div className='heading-left row  f_flex'>
                            <i className="fa-solid fa-gift"></i>
                            <h2>Big Discounts</h2>
                        </div>
                        <div className='heading-right row '>
                            <span>View all</span>
                            <i className='fa-solid fa-caret-right'></i>
                        </div>
                    </div>
                    <DisCard />
                </div>
            </section>
        </>
    )
}

export default Discount