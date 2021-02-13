import React, {useState} from 'react';
import ReorderIcon from '@material-ui/icons/Reorder';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

import '../app.css';


function Navbar({searchText}) {
    const [showLinks, setShowLinks] = useState(false);
    const [text, setText] = useState('');

    const onSubmit =(e) =>{
        e.preventDefault();
        searchText(text);
    }

    return (
        <div className='Navbar'>
            <div className='leftSide'>
                <div className="links" id={showLinks ? 'hidden': ''}>
                    <Link exact to="/">HR - Portal</Link>
                    <Link exact to="/shortlisted">Shortlist</Link>
                    <Link exact to="/rejected">Rejected</Link>
                </div>
                <button onClick={()=>setShowLinks(!showLinks)}><ReorderIcon /></button>
            </div>
            <div className='rightSide'>
                <input type="text" placeholder="Search..." onChange={e => setText(e.target.value)}/>
                <button onClick={onSubmit}><SearchIcon /></button>
            </div>
        </div>        
    )
}

export default  Navbar;