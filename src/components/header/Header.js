import React from 'react';
import './Header.css';

import { FiLinkedin } from 'react-icons/fi';
import { RiGithubLine } from 'react-icons/ri';

export default function Header() {
    return (
        <header className="Header">
            <h4 className="Logo"><a className="logo-link" href="home">bilasA</a></h4>
            <div className="Social-icons">
                <a className="social-link" rel="noopener noreferrer" target="_blank" href="https://github.com/ArtemBilas">
                    <RiGithubLine className="icon" />
                </a>
                <a className="social-link" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/artem-bilas-b50905182/">
                    <FiLinkedin className="icon" />
                </a>
            </div>
        </header>
    )
}