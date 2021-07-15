import React from 'react';
import Icon from '../assets/image/icon.png';

const Navbar = props => {
    return (
        <nav>
            <div className="nav-container container d-flex">
                <img className="nav-icon" src={Icon} alt="icon" />
                <div className="d-flex flex-column justify-content-between">
                    <p className="text nav-good m-0">Good Morning</p>
                    <p className="text nav-fellas m-0">Fellas</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;