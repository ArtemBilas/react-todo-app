import React, { Component } from 'react';
import { CgAddR } from "react-icons/cg";
import './ItemAddFrom.css';

export default class ItemAddFrom extends Component {
    state = {
        label: ''
    }

    onLabelChange = (e) => {
        const value = e.target.value;

        if (value.trim() === '') {
            this.setState({
                label: ''
            });
            return
        } else {
            this.setState({
                label: value
            })
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.label.trim() === '') {
            return
        } else {
            this.props.addItem(this.state.label);
            this.setState({
                label: ''
            });
        }

    }

    render() {
        const { label } = this.state;

        return (
            <form
                className="search-panel-wrapper"
                onSubmit={this.onSubmit}
            >
                <input
                    type="text"
                    placeholder='to add ...'
                    className="SearchPanel"
                    onChange={this.onLabelChange}
                    value={label}
                />
                <button
                    className="search-btn"
                >Add <CgAddR className="icon-plus" /></button>
            </form>
        );
    }

};