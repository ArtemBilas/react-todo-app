import React from 'react';

import { CgTrash } from 'react-icons/cg';
import { GoBold, GoCheck } from 'react-icons/go';

import './TodoListItem.css';

export default function TodoListItem(props) {

    const {
        label,
        id,
        onDelete,
        onToggleImportant,
        onToggleDone,
        important,
        done
    } = props;

    const classes = ["item-label"];

    if (important) {
        classes.push('important');
    }

    if (done) {
        classes.push('done');
    }

    
    return (
        <li
            key={id}
            className="list-item"
        >
            <span
                className={classes.join(' ')}
            >
                <button
                    className="btn-line-throught"
                    onClick={onToggleDone}
                >
                    <GoCheck />
                </button>
                
                {label}
            </span>

            <span className="btns-container">
                <button
                    className="btn-delete"
                    onClick={onDelete}
                >
                    <CgTrash />
                </button>

                <button
                    className="btn-important"
                    onClick={onToggleImportant}
                >
                    <GoBold />
                </button>
            </span>
        </li>
    );
};