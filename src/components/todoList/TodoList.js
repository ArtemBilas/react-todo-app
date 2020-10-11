import React from 'react';

import Plug from '../plug/Plug';
import TodoListItem from './todoListItem/TodoListItem';
import SearchPanel from '../searchPanel/SearchPanel';

import './TodoList.css';

export default function TodoList({ 
    filter,
    todoData, 
    onDelete, 
    onToggleImportant, 
    onToggleDone, 
    onSearchChange,
    onFilterChange
    }) {


    const element = todoData.map(item => {
        const { id, ...itemProps } = item;
        return (
            <TodoListItem
                key={id}
                onDelete={() => onDelete(id)}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleDone={() => onToggleDone(id)}
                {...itemProps}
            />
        )
    });

    return (
        <div className="container-todo-list">
            <SearchPanel 
                filter={filter}
                onSearchChange={onSearchChange} 
                onFilterChange={onFilterChange}
                />
            <ul className="todo-list">
                {element.length === 0 ? <Plug /> : element}
            </ul>
        </div>
    );
};