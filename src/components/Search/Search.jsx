import React, { Component } from 'react'
import './Search.css'


export default class Search extends Component {
    state = {
        value: '',
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        if (event.target.elements.text.value) {
            this.setState({
                value: event.target.elements.text.value
            })
        }
    }

    onHandleChange = (event) => {
        event.preventDefault();
        console.log()
        this.setState( { t: event.target.value })
    }
    render() {
        // console.log(this.state)
        return (
                <div className='search-container'>
                    <form onSubmit={this.handleOnSubmit}>
                        <input type='text' name='text' placeholder='Track, album' onChange={this.onHandleChange.bind(this)}/>
                        <button>Search</button>
                    </form>
                </div>
        )
    }
}