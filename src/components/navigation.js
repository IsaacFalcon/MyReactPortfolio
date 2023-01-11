import React from "react";
import { Link } from "react-router-dom";
import './components.css';

function Navigation() {
  return (
    <div className="navflex">
      <Link className='navlink' to='/'><button className="btn">Home</button></Link>
      <Link className='navlink' to='/portfolio'><button className="btn">Portfolio</button></Link>
      <Link className='navlink' to='/contact'><button className="btn">Contact</button></Link>
      <Link className='navlink' to='/resume'><button className="btn">Resume</button></Link>
    </div>
  );
}

export default Navigation;