import React from 'react'

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className="container d_flex">
          <div className="left row">
            <div className='left-items'>
              <i className="fa-solid fa-phone"></i>
              <label> (+961) 71 111 111 </label>
            </div>
            <div className='left-items'>
              <i className="fa-solid fa-envelope"></i>
              <label> rola.al.ahmad109@gmail.com </label>
            </div>
          </div>
          <div className="right row RText">
            <label> Theme FAQ's </label>
            <label> Need Helps </label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head