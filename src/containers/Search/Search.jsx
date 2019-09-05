import React, { Component } from 'react'
import './Search.css'
import { Link, withRouter } from 'react-router-dom'

export class SearchCon extends Component {
    state = {
        value: '',
        disabled: true
    }
    componentDidUpdate(prevProps, PrevState) {
        if(PrevState !== this.state) {
            console.log(this.state)
        }
    }

    handleOnSubmit = e => {
        e.preventDefault();
        if (this.state.value) {
            this.props.history.push(`/search/${this.state.value}`)
        }
        // thi
    }

    handdleChange = e => {
        // console.log()
        this.setState({
            value: e.target.value,
            disabled: false,
        })
    }

    render() {
        console.log(this.props)
        // console.log(this.state)
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