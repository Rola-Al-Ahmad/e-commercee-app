import React, { useState, useEffect } from "react"
const ShopCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0);
  const [maxItems, setMaxItems] = useState(shopItems.length);

  const increment = () => {
    setCount(count + 1)
  }

  const updateMaxItems = () => {
    if (window.innerWidth < 600) {
      setMaxItems(4);
    } else if (window.innerWidth < 990) {
      setMaxItems(6);
    } else {
      setMaxItems(shopItems.length);
    }
  };

  useEffect(() => {
    updateMaxItems();
    window.addEventListener('resize', updateMaxItems);
    return () => window.removeEventListener('resize', updateMaxItems);
  }, [shopItems.length]);

  return (
    <>
      {shopItems.slice(0, maxItems).map((shopItems) => {
        return (
          <div className='box' key={shopItems.id}>
            <div className='product mtop'>
              <div className='img'>
                <span className='discount'>{shopItems.discount}% Off</span>
                <img src={shopItems.cover} alt='' />
                <div className='product-like'>
                  <label>{count}</label> <br />
                  <i className='fa-regular fa-heart' onClick={increment}></i>
                </div>
              </div>
              <div className='product-details'>
                <h3>{shopItems.name}</h3>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='price'>
                  <h4>${shopItems.price}.00 </h4>
                  {/* step : 3  
                                            if hami le button ma click garryo bahne 
                                        */}
                  <button onClick={() => addToCart(shopItems)}>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart