import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todo from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo'
import About from './components/About'
import Axios from 'axios';

class App extends Component {

    state = {
        todos: [],
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then( res => this.setState({ todos: res.data}))
        .catch( err => console.log(err));
    }

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                todo.id === id && (todo.completed = !todo.completed);
                return todo;
            })
        })
    }

    deleteTodo = (id) => {
        Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then( res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
        .catch( err => console.log(err));
        
    }

    addTodo = (title) => {
        const newTodo = {
            title,
            completed: false
        }
        Axios.post('https://jsonplaceholder.typicode.com/todos',newTodo)
        .then( res => this.setState({ todos: [...this.state.todos, res.data] }) )
        .catch( err => console.log(err));
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <div>
                        <Header />
                        <Route exact path='/' render={ props => (
                            <React.Fragment>
                                <AddTodo addTodo={this.addTodo} />
                                <Todo todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
                            </React.Fragment>
                        )} />
                        <Route exact path='/about' component={About}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
