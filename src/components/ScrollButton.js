import React from 'react'
import backToTop from "../assets/images/icons/backtotop.png"

const BackToTopButton = () => {
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <div className='back-to-top'>
      <img src={backToTop} alt="back to top icon" onClick={ScrollToTop} />
    </div>
  )
}

export default BackToTopButton