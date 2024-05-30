import React from 'react'
import './header.css'
function header() {
    return (
        <div className='header-container'>
            <nav className="navbar">
                <a href="#">Home</a>
                <a href="#">가계부</a>
                <a href="#">메모장</a>
            </nav>
        </div>
    )
}

export default header