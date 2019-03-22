import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {

    state = {
        title: ''
    }

    handleOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{ display: 'flex'}}>
                <input
                    type='text'
                    name='title'
                    placeholder='Add Todo...'
                    style={{flex: '10'}}
                    value={this.state.title}
                    onChange={this.handleOnChange}
                />
                <input
                    type='submit'
                    name='Submit'
                    className='btn'
                    style={{flex: '1'}}
                />
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;