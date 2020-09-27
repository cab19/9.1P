import React from 'react'
import Button from './Button'
import './Footer.css'

const NewsLetter = () => (
    <span className="news-block">
      <span className="title">NEWSLETTER SIGNUP</span>
      <span><input type="text" placeholder="Enter your email"></input></span>
      <span><Button text="Subscribe"/></span>
    </span>
)

export default NewsLetter