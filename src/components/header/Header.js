import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import siteLogo from "../../assets/images/icons/logo.png"
import fingerTopIcon from "../../assets/images/icons/finger_top.svg"
import Button from 'react-bootstrap/Button'
import ScrollClassAdder from '../ScrollClassAdder'

const Header = () => {

  const [show, setShow] = useState(false);

  const showMenu = () => {
    setShow(!show);
  }
  const closeMenu = () => {
    setShow(false);
  }

  const rotateButton = () => {
    refButton.current.classList.add("rotate");
  }
  const resetButton = () => {
    refButton.current.classList.remove("rotate");
  }

  const refButton = useRef(null);

  useEffect(() => {
    if (show) {
      refButton.current.classList.add("rotate");
    } else {
      refButton.current.classList.remove("rotate");
    }
  }, [show]);

  return (
    <>
      <Link to="/" title="home" id="logo" onClick={closeMenu} className={ScrollClassAdder("#logo", "scrolled", 200)}>
        <img alt="site logo" src={siteLogo} />
      </Link>
      <div id="menu" onMouseEnter={rotateButton} onMouseLeave={() => { resetButton(); closeMenu(); }} className={ScrollClassAdder("#menu", "scrolled", 200)}>
        <Button variant='outline-light' onClick={showMenu} ref={refButton}>
          <img alt="menu" src={fingerTopIcon} />
          {/* {show ? <img alt="menu" className="rotate1" src={fingerLeftIcon} /> : <img alt="menu" src={fingerLeftIcon} />} */}
        </Button>
        <ul className={show ? "show" : null}>
          <li><Link to="/my-story" onClick={closeMenu}>My Story</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
          <li><Link to="/lets-talk" onClick={closeMenu} onBlur={closeMenu}>Let's Talk</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Header