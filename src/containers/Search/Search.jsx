import React, { Component } from 'react'
import './Search.css'
import { withRouter } from 'react-router-dom'

export class SearchCon extends Component {
    state = {
        value: '',
        disabled: true,
        redirect: false,
    }

    handleOnSubmit = e => {
        e.preventDefault();
        this.props.history.push(`/search/${this.state.value}`)

    }

    handdleChange = e => {
        this.setState({
            value: e.target.value,
            disabled: false,
        })
    }

    render() {
        return (
                <div className='search_container'>
                    <form onSubmit={this.handleOnSubmit}>
                        <input autoComplete="off" id='search' name='text' placeholder='Track, album' onChange={this.handdleChange}/>
                        <button disabled={this.state.disabled}>Search</button>
                    </form>
                </div>
        )
    }
}

const Search = withRouter(SearchCon);

export default Search;