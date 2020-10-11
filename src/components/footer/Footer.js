import React from 'react';
import {CgCopyright} from 'react-icons/cg';
import './Footer.css';

export default function Footer(){
    return (
        <footer className="Footer">
            <h5 className="Footer-Copy">
                <CgCopyright/>
                Copyright 2020
                <a className="Footer-link" rel="noopener noreferrer" href="/home">
                    <span className="Footer-icon">bilasA</span>
                </a> 
            </h5>
        </footer>
    )
}