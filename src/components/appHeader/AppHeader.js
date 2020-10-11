import React from 'react';
import './AppHeader.css';

export default function AppHeader({ toDo, done }) {
    return (
        <div className="AppHeader">
            <h1 className="AppTitle">To Do App</h1>
            <p className="amound-content">
                <span>{done}</span> done from <span>{toDo}</span>
            </p>
        </div>
    )
}