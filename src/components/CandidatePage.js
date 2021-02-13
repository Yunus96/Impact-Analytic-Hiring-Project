import React from 'react';
import { useState, useEffect } from 'react';

import '../app.css';

function CandidatePage(props) {
    const [ candidate, setCandidate ] = useState({});

    useEffect(() => {
        fetch(`https://rocky-shore-64225.herokuapp.com/https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json`)
        .then(res => res.json())
        .then(data => {
            for(let i=0; i<data.length; i++){
                if(data[i].id == props.match.params.id){
                    setCandidate(data[i]) 
                }
                //console.log(props.match.params.id)
            }
            
        })
        .catch(err => console.log(err))
    })

    return (
        <div className='detail'>
            <div className="leftSide">
                <img src={candidate.Image} alt='cand' ></img>
            </div>
            <div className="rightSide">
                <div className="rightSideIn">
                    <h1>Candidate Details</h1>
                    <hr/>
                    <ul>
                        <li>Candidate Id   : {candidate.id}</li>
                        <li>Candidate Name : {candidate.name}</li>
                    </ul>
                    <button className="shortlist">Shortlist</button>
                    <button className="reject">Reject</button>
                </div>
            </div>
        </div>
    )
}

export default CandidatePage;