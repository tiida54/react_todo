import React from 'react';
import Header from './component/layout/Header';

import Todos from './component/Todos';
import AddTodo from './component/AddTodo';

import './App.css';

class App extends React.Component {
  // 1.install state
  state = {
    todos: [
      {
        id: 1,
        title: 'todolist 1',
        completed: false
      },
      {
        id: 2,
        title: 'todolist 2',
        completed: true
      },
      {
        id: 3,
        title: 'todolist 3',
        completed: false
      }
    ]
  }

  // todo.completed = !todo.completed
  markComplete = (id) => {
    console.log(id)
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          {/* 2.ref state*/}
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
