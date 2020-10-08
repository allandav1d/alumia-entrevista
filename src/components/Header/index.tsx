import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


import logo from '../../assets/logo.svg';
import './styles.css'

interface Props{
    onItemSelected : number;
}

const Header: React.FC<Props> = ({ onItemSelected }) => {
  const [transparancy, setTransparancy] = useState(0);
  const [colorFont, setColorFont] = useState("var(--text-color-light)");
  
  useEffect(() => {
    window.onscroll = () => {
      let resolve = window.pageYOffset/500
      if(resolve >= 0.20){
        setColorFont("var(--title-color)");
      }else{
        setColorFont("var(--text-color-light)");
      }
      setTransparancy(resolve)
    }
}, []);

  return (
    <header id="header" style={{backgroundColor: `rgb(240,240,240,${transparancy})`}}>
      <img src={logo} alt=""/>
      <nav> 
        <ul>
          <li><NavLink style={{color: `${colorFont}`}}  exact to="/" activeClassName="selected">Item 1</NavLink></li>
          <li><NavLink style={{color: `${colorFont}`}}  to="/curso1" activeClassName="selected">Item 2</NavLink></li>
          <li><NavLink style={{color: `${colorFont}`}}  to="/curso2" activeClassName="selected">Item 3</NavLink></li>
        </ul>    
      </nav>
    </header>
  );
}

export default Header;