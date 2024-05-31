import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
function header() {
    return (
        <>
            <div className='header-container'>
                <h1>Voice Recorder</h1>
                <nav className="navbar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/calc">가계부</Link></li>
                        <li><Link to="/memo">메모장</Link></li>
                        <li><Link to="/todo">ToDo List</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default header