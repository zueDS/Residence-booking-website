import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import { Link, NavLink } from 'react-router-dom'


const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false);

  const GetMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800)
    {
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">

            <Link to ="/">
            <img src="./logo.png" alt="logo" width={100}/>
            </Link>

            <OutsideClickHandler 
             onOutsideClick = {() => {
              setMenuOpened(false);
             }} >
              <div className="flexCenter h-menu"
              style={GetMenuStyles (menuOpened)} >

                <NavLink to = "/properties">Properties</NavLink>  

                  
                  <a href="">Contact</a>

                  {/* Login button */}
                  <button className="button">
                    Login
                  </button>
              </div>
            </OutsideClickHandler>

            <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)} >
              <BiMenuAltRight size={30}/>
            </div>
        </div>
    </section>
  )
}

export default Header
