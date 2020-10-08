import React from 'react';
import logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';

import './styles.css'

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="main">
      <img src={logo} alt=""/>
      <div>
        <h4>Mapa do site</h4>
        <NavLink exact to="/" activeClassName="selected">Item 1</NavLink>
        <NavLink to="/curso1" activeClassName="selected">Item 2</NavLink>
        <NavLink to="/curso2" activeClassName="selected">Item 3</NavLink>
      </div>
      <div>
      <h4>Endereço</h4>
        <address>
          Rua Um, 299<br/>
          São Paulo - SP<br/>
          Brasil
        </address>
      </div>
      </div>
      <div className="botton">
        <p>Feito com <span>❤</span> para Alumia</p>
        <p>Copyright © 2020 AllanDav1d</p>
      </div>
    </footer>
  );
}

export default Footer;