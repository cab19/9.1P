import React from 'react'
import { SocialIcon } from 'react-social-icons';
import './Footer.css'

const SocialLinks = () => (
    <span className="news-block">
      <span className="title">CONNECT US</span>
      <SocialIcon className="social-icons" url="http://facebook.com/"/>
      <SocialIcon className="social-icons" url="http://twitter.com/"/>
      <SocialIcon className="social-icons" url="http://instagram.com/"/>
    </span>
)

export default SocialLinks