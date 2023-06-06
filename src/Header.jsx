import React from 'react';
import {NavLink} from "react-router-dom"
import HeaderCSS from "./Header.module.css";
import { HeaderStyle } from './components/Header.styled';
import {Flex} from "./components/Flex.styled"
const Header = () => {
  return (
    <div >
      <Flex align="center">

        <div>
            <NavLink to="/" className={HeaderCSS.font_icon}><i className="las la-radiation font-icon"></i></NavLink>
        </div>
        <div>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact" >Contact</NavLink>
        </div>
      </Flex>

    </div>
  )
}

export default Header