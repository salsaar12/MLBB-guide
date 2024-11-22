import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faShieldAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './BotNav.css';

export default function BotNav() {
  return (
    <div className="bottom-nav">
      <NavLink to="/" className="link nav-link" activeClassName="active">
        <FontAwesomeIcon icon={faHome} className="icon" />
        <span>Home</span>
      </NavLink>
      <NavLink to="/hero" className="link nav-link" activeClassName="active">
        <FontAwesomeIcon icon={faUser} className="icon" />
        <span>Hero</span>
      </NavLink>
      <NavLink to="/role" className="link nav-link" activeClassName="active">
        <FontAwesomeIcon icon={faShieldAlt} className="icon" />
        <span>Role Hero</span>
      </NavLink>
      <NavLink to="/about" className="link nav-link" activeClassName="active">
        <FontAwesomeIcon icon={faInfoCircle} className="icon" />
        <span>About</span>
      </NavLink>
    </div>
  );
}
