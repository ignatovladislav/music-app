import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './Login.css'

import { Socialnetwork } from '../Socialnetwork/Socialnetwork'
import { Error } from "../Error/Error"
import { connect } from 'react-redux'
import { singIn } from '../../store/actions/authActions'

class Login extends Component {
    state = {
        disabledBtn: true,
        email: '',
        password: '',
    }
    // (<Redirect to={`user/${this.props.auth.uid}`} />)
    // 
    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
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
        console.log(this.props.auth)
        
        // readyToRedirect ? <Redirect to={`user/${this.props.auth.uid}`} /> : null;
        return (
        <div className='login_container_wrapper'>
            <h1>What will you listen to today?</h1>
            <div className='main_singup'>
                <Socialnetwork 
                    text='Facebook'
                    img='https://img.icons8.com/color/48/000000/facebook-circled.png'
                    class='icon_facebook'
                />
                <Socialnetwork
                    text='Google'
                    img='https://img.icons8.com/color/48/000000/google-logo.png'
                    class='icon_google'
                />
            </div>
            <form className='form_container' onSubmit={this.handleSubmit}>
                <input autoComplete="off" name='email' type="email" placeholder='E-mail address' onChange={this.handleChange} />
                <input name='password' type="password" placeholder='Password' onChange={this.handleChange} />
                <button disabled={disabledBtn} >Log In</button>     
                
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
        singIn: (creds) => dispatch(singIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)