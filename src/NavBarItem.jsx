import React from 'react'
import './NavBarItem.css'

const NavBarItem = (props) => (
  <a href="" className="navbar-item">
      {props.text}
  </a>
)

export default NavBarItem