import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = (props) => {
  // console.log(props);
  const location = useLocation();
  useEffect(() => {
    if(!location.hash) {
      window.scrollTo(0,0);
    }
  },[location]);
  return (
    <>{props.children}</>
  )
}

export default ScrollToTop