import React, { Component } from 'react';

import './ItemAddForm.css';

class ItemAddForm extends Component {

    constructor(props) {
        super();
        this.state = {
            task: ''
        }
        this.addTask = props.addTask;
    }

    onLabelChange = (e) => {
        this.setState({
            task: e.target.value
        })
    }
    
    
    onSubmit = (e) => {
        e.preventDefault();
        this.addTask(this.state.task)
        this.setState({
            task: ''
        })
    }
    
    
    render() {

        return (
            <form className='item-add-form d-flex'
                onSubmit={this.onSubmit}>
                <input 
                    type='text'
                    className='form-control'
                    onChange={this.onLabelChange}
                    placeholder='What to do?'
                    value={this.state.task}
                />
                <button 
                className='btn btn-outline-secondary'
                >Add Item</button>
            </form>
        )
    }
}

export default ItemAddForm;