import './Authentication.scss'
import axiosInstance from '../../axios'
import {useState, useEffect} from 'react'
import {useNavigate } from 'react-router-dom'
const Authentication = () => {

    const history = useNavigate();

    const [loginCreds, setLoginCreds] = useState({
        email: '',
        password: ''
    })

    const handleLoginChange = (element) => {
        setLoginCreds({...loginCreds, [element.target.name]: element.target.value})
    }

    const Login = () => {
        console.log(loginCreds)
        axiosInstance({
            method: 'POST',
            url: '/authentication/login',
            data: {email: loginCreds.email, password: loginCreds.password}
        })
            .then(res => {
                if(res.status == 200){
                    localStorage.setItem('access_token', res.data.token);
                    history('/home')
                }
                else{

                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    const setActive = (el) => {
        const switchers = [...document.querySelectorAll('.switcher')]
        switchers.forEach(eli123 => {
            eli123.parentElement.classList.remove('is-active');
            console.log(eli123)
        })

        el.target.parentElement.classList.add('is-active')
    }

    return (
        <section style={{ backgroundColor: '#3b4465', height: '84vh' }} className="forms-section">
            <h1 className="section-title">Login to reserve a flight ticket...</h1>
            <div className="forms">
                <div className="form-wrapper is-active">
                    <button type="button" onClick={setActive} className="switcher switcher-login">
                        Login
                        <span className="underline"></span>
                    </button>
                    <div className="form form-login">
                        <fieldset>
                            <legend>Please, enter your email and password for login.</legend>
                            <div className="input-block">
                                <label htmlFor="login-email">E-mail</label>
                                <input onChange={handleLoginChange} id="login-email" name="email" type="email" required />
                            </div>
                            <div className="input-block">
                                <label htmlFor="login-password">Password</label>
                                <input onChange={handleLoginChange} id="login-password" name="password" type="password" required />
                            </div>
                        </fieldset>
                        <button onClick={Login} style={{ backgroundColor: '#ea4640' }} type="submit" className="btn-login">Login</button>
                    </div>
                </div>
                <div className="form-wrapper">
                    <button type="button" onClick={setActive} className="switcher switcher-signup">
                        Sign Up
                        <span className="underline"></span>
                    </button>
                    <div className="form form-signup">
                        <fieldset>
                            <legend>Please, enter your email, password and password confirmation for sign up.</legend>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="input-block">
                                        <label htmlFor="signup-email">Name</label>
                                        <input id="signup-email" type="email" required />
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="signup-email">Last Name</label>
                                        <input id="signup-email" type="email" required />
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="signup-email">E-mail</label>
                                        <input id="signup-email" type="email" required />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="input-block">
                                        <label htmlFor="signup-password">Password</label>
                                        <input id="signup-password" type="password" required />
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="signup-password-confirm">Confirm password</label>
                                        <input id="signup-password-confirm" type="password" required />
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <button type="submit" className="btn-signup">Continue</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Authentication;