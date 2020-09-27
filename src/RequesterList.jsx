import React from 'react'
import Requester from './Requester'
import requesterList from './listOfRequesters'
import './Requester.css'

function requesterCard (requester , i){
    return <div>
        <Requester 
            key = {requester.key}
            name={requester.name}
            logo={requester.logo}
            description={requester.description}
        />
    </div>
}


const RequesterList = () =>
{  
    return <div className="row">
      {requesterList.map((requesterCard))}     
    </div>
}

export default RequesterList