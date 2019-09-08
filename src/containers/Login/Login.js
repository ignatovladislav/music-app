import React, { Component } from 'react'
import './Login.css'

import { Socialnetwork } from '../../components/Socialnetwork/Socialnetwork'
import { Error } from "../../components/Error/Error"
import { connect } from 'react-redux'
import { singIn, googleLogin } from '../../store/actions/authActions'

class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps !== this.props && !this.props.authError && this.props.auth.uid !== undefined) {
            this.props.history.push('/user')
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        
        this.props.singIn(this.state)
    }

    render() {
        const { authError } = this.props;
        const { email, password } = this.state;
        
        const disabledBtn = email.length > 0 && password.length > 0 ? false : true;
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