import React from 'react'
import NewsLetter from './NewsLetter'
import SocialLinks from './SocialLinks'

const Footer = () => (
    <div style={{textAlign: 'center', margin: '20px', clear: 'both'}}>
        <NewsLetter />
        <SocialLinks />
    </div>
)

export default Footer