import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
import SignedInLink from './SignedInlink';
import SignedOutLink from './SignedOutlink';

const NavBar = () =>{
    return (
        <nav>
            <div className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo">AJL</Link>
                    <SignedInLink className="right"/>
                    <SignedOutLink className="right"/>
                </div>
            </div>
        </nav>

    )
}

export default NavBar