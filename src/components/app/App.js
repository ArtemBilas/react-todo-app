import React, { Component } from 'react';
import Layout from '../../layout/layout';
import AppHeader from '../appHeader/AppHeader';
import ItemAddFrom from '../itemAddForm/ItemAddFrom';
import TodoList from '../todoList/TodoList';
import './App.css';


export default class App extends Component {

  state = {
    todoData: [
      // this.createItem('Learn React'),
      // this.createItem('Build this app'),
      // this.createItem('Have Fun'),
      // this.createItem('Grow'),
    ],
    term: '',
    filter: 'all'
  }
  componentDidMount() {
    const allLocalItems = Object.keys(localStorage).map( key => {
      return JSON.parse(localStorage.getItem(key));
    });

    this.setState({
      todoData: allLocalItems
    });
  }

  createItem(label) {

    if (typeof label === 'object') {
      const localLabelObj = {
        ...label
      }
      return localLabelObj
    
    } else {
      const id = (Date.now() + Math.random());
      const labelObj = {
        label,
        important: false,
        done: false,
        id: id
      }
      localStorage.setItem(`${id}`, JSON.stringify(labelObj));
      return labelObj
    }
  }

  toggleProperty(arr, id, propName) {

    const idx = arr.findIndex(el => el.id === id);
    const oldItem = arr[idx];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName]
    };

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];

  }

  deleteItem = (id) => {
    const itemsWithAnotherId = this.state.todoData.filter(item => item.id !== id);
    this.setState({ todoData: itemsWithAnotherId });
    localStorage.removeItem(id);
  }

  addItem = (text) => {

    const newItem = this.createItem(text)

    this.setState(({ todoData }) => {

      const newArray = [
        ...todoData,
        newItem
      ]

      return {
        todoData: newArray
      }

    })
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    });
  }

  onFilterChange = (filter) => {
    this.setState({ filter })
  }

  onSearchChange = (term) => {
    this.setState({ term })
  }

  searchItem = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter(item => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
  }

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items
      case 'active':
        return items.filter(item => !item.done);
      case 'done':
        return items.filter(item => item.done);
      default:
        return items;
    }
  }

  render() {
    const { todoData, term, filter } = this.state;
    const visibleItem = this.filter(this.searchItem(todoData, term), filter);
    const doneItems = todoData.filter(item => item.done).length;
    const todoItems = todoData.length - doneItems;

    return (
      <Layout>
        <div className="App">
          <AppHeader toDo={todoItems} done={doneItems} />
          <ItemAddFrom addItem={this.addItem} />
          <TodoList
            todoData={visibleItem}
            onDelete={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
            onSearchChange={this.onSearchChange}
            onFilterChange={this.onFilterChange}
            filter={filter}
          />
        </div>
      </Layout>
    );
  };
};