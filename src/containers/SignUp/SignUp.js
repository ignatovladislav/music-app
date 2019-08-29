import React, { Component } from 'react'
import './SingUp.css'

import { Socialnetwork } from '../../components/Socialnetwork/Socialnetwork'
import { Error } from "../../components/Error/Error"
import { connect } from 'react-redux'
import { singUp, googleLogin } from '../../store/actions/authActions'



class SingUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps !== this.props && !this.props.authError) {
            this.props.history.push(`user/${this.props.auth.uid}`)
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.singUp(this.state)
    }

    render() {
        const { authError } = this.props;
        const { email, password, firstName, lastName } = this.state;
        
        const disabledBtn = email.length > 0 && password.length > 0 && firstName.length && lastName.length ? false : true;
        return (
            <div className='singup_container_wrapper'>
                <h1>Ready to sign up?</h1>
                <div className='main_singup'>
                    <Socialnetwork {...this.props} />
                </div>

                <form className='form_container' onSubmit={this.handleSubmit}>
                    <input autoComplete="off" name='email' type="email" placeholder='E-mail address' onChange={this.handleChange}/>
                    <input name='password' type="password" placeholder='Password' onChange={this.handleChange}/>
                    <input autoComplete="off" name='firstName' type="text" placeholder='First name' onChange={this.handleChange}/>
                    <input autoComplete="off" name='lastName' type="text" placeholder='Last name' onChange={this.handleChange}/>
                    <button disabled={disabledBtn}>Sing Up</button>

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
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        singUp: newUser => dispatch(singUp(newUser)),
        googleLogin: () => dispatch(googleLogin())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingUp)