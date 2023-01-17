import React from 'react'
import app from '../app.data';

function Header() {
    return (
        <header className="header">
            <div className="maxwidth">
                <div className="headerflex">
                    <div className="headerlogo">
                        <img className='headerimage' src="/assets/images/logo-white.svg" alt="" />
                        <div className="headertext">{app.name}</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;