import React from 'react'
import NavBarItem from './NavBarItem'
import Button from './Button'
import './NavBar.css'

const NavBar = (props) => (
  <div className="navbar">
      <span className="title">ICrowdTask</span>
      <NavBarItem text="How it works"/>
      <NavBarItem text="Requesters"/>
      <NavBarItem text="Workers"/>
      <NavBarItem text="Pricing"/>
      <NavBarItem text="About"/>
      <Button text="Sign In"/>
  </div>
)

export default NavBar