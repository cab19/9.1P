import React from 'react'
import faker from 'faker'

const Image = (props) => (
  <div style={{textAlign: 'center', margin: '20px'}}>
    <img src={faker.image.imageUrl(800,500,"business")} alt="main" className="image"/>
  </div>
)

export default Image