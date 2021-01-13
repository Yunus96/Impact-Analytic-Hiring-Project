import React, {useState} from 'react';
import ReorderIcon from '@material-ui/icons/Reorder';
import SearchIcon from '@material-ui/icons/Search';

import '../app.css';

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className='Navbar'>
            <div className='leftSide'>
                <div className="links" id={showLinks ? 'hidden': ''}>
                    <a href="/">HR - Portal</a>
                    <a href="/shortlist">Shortlist</a>
                    <a href="/rejected">Rejected</a>
                </div>
                <button onClick={()=>setShowLinks(!showLinks)}><ReorderIcon /></button>
            </div>
            <div className='rightSide'>
                <input type="text" placeholder="Search..." />
                <button><SearchIcon /></button>
            </div>
        </div>
    )
}

export default  Navbar;