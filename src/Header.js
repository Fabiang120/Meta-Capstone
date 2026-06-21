import React from 'react';
import './Header.css';

export default function Header( {children} ){
    return(
        <>
            <header className="site-header">
                <img className="site-logo" src="/Logo.svg" alt="Logo"></img>
                {children}
            </header>
        </>
    )
}

