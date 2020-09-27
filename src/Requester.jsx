import React from 'react'
import './Requester.css'

const Requester = (props) =>
{
    return <div className="column">
              <div className="card">
              <img src={props.logo} alt="requester" />
                <h3>{props.name}</h3>
                <p>{props.description}</p>
              </div>
            </div>
}

export default Requester