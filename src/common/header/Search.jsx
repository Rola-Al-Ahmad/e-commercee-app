import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Search = ({ cartItem }) => {

  useEffect(() => {
    const handleScroll = () => {
      const search = document.querySelector('.search');
      search.classList.toggle('active', window.scrollY > 100);
      calcScrollValue();
    };
    const calcScrollValue = () => {
      const scrollProgress = document.getElementById('progress');
      const pos = window.scrollY;
      const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollValue = Math.round((pos * 100) / calcHeight);
      if (pos > 100) {
        scrollProgress.style.display = 'grid';
      } else {
        scrollProgress.style.display = 'none';
      }
      scrollProgress.style.background = `conic-gradient(#4082fc ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <Link to='/' onClick={scrollToTop} style={{ cursor: 'pointer' }}>
              <img src='./assets/logo.png' alt='' />
            </Link>
          </div>

          <div className="search-box f_flex">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search" />
          </div>
          <div className="icon f_flex width">
            <i className="fa-solid fa-user icon-circle"></i>
            <div className="cart">
              <Link to="/cart">
                <i className="fa-solid fa-bag-shopping icon-circle"></i>
                <span>{cartItem.length === 0 ? 0 : cartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div id="progress" onClick={scrollToTop}>
        <span id="progress-value"><i class="fa-solid fa-caret-up"></i></span>
      </div>
    </>
  )
}

export default Search