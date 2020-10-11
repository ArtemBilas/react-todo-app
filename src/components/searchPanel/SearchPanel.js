import React, { Component } from 'react';
import './SearchPanel.css';

export default class SearchPanel extends Component {
    state = {
        term: ''
    }

    onSearchChange = (e) => {
        const term = e.target.value.trim();
        this.setState({ term })
        this.props.onSearchChange(term)
    }

    render() {
        const buttons = [
            { name: 'all', label: 'All', clazz: 'btn-all' },
            { name: 'active', label: 'Active', clazz: 'btn-active' },
            { name: 'done', label: 'Done', clazz: 'btn-done' },
        ];
        const {filter, onFilterChange} = this.props;

        const button = buttons.map(({name, label, clazz}) => {
            const isActiveBtn = filter === name;

            const checkedClass = isActiveBtn ? clazz.concat(' checked') : clazz; 

            return (
                <button 
                    key={name}
                    className={ checkedClass}
                    onClick={() => onFilterChange(name)}
                >{label}</button>
            );
        });

        return (
            <div className="search-panel" >
                <input
                    className="search-input"
                    placeholder='&#128269;'
                    type="text"
                    value={this.state.term}
                    onChange={this.onSearchChange}
                />
                <div className="search-btns-container">
                    {button}
                </div>
            </div>
        );
    };

};