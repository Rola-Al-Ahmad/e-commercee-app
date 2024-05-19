import React, {useEffect, useState} from 'react'
import Ndata from './Ndata'
import './newArrivals.css'

const Cart = () => {
    const [maxItems, setMaxItems] = useState(Ndata.length);
    const updateMaxItems = () => {
        if (window.innerWidth < 600) {
          setMaxItems(4);
        } else {
          setMaxItems(Ndata.length);
        }
      };
    
      useEffect(() => {
        updateMaxItems();
        window.addEventListener('resize', updateMaxItems);
        return () => window.removeEventListener('resize', updateMaxItems);
      }, [Ndata.length]);
    return (
        <>
            <div className="content grid product">
                {Ndata.slice(0, maxItems).map((val, index) => {
                        return (
                            <div className="box" key={index}>
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                </div>
                                <div className='title d_flex'>
                                    <h4>{val.name}</h4>
                                    <span>{val.price}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Cart