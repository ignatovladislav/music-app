import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
import './Login.css'

import { Socialnetwork } from '../Socialnetwork/Socialnetwork'
import { Error } from "../Error/Error"
import { connect } from 'react-redux'
import { singIn, googleLogin } from '../../store/actions/authActions'

class Login extends Component {
    state = {
        disabledBtn: true,
        email: '',
        password: '',
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps !== this.props && !this.props.authError && this.props.auth.uid !== undefined) {
            this.props.history.push(`user/${this.props.auth.uid}`)
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value,
            disabledBtn: false
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        
        this.props.singIn(this.state)
    }

    render() {
        const { authError } = this.props;
        const { disabledBtn } = this.state;
        // console.log(this.props)
        return (
        <div className='login_container_wrapper'>
            <h1>What will you listen to today?</h1>
            <div className='main_singup'>
                <Socialnetwork {...this.props}/>
            </div>
            <form className='form_container' onSubmit={this.handleSubmit}>
                <input autoComplete="off" name='email' type="email" placeholder='E-mail address' onChange={this.handleChange} />
                <input name='password' type="password" placeholder='Password' onChange={this.handleChange} />
                <button disabled={disabledBtn}>Log In</button>     
                {
                    authError ? <Error text={authError} /> : null
                }
            </form>
        </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        singIn: (creds) => dispatch(singIn(creds)),
        googleLogin: () => dispatch(googleLogin())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)