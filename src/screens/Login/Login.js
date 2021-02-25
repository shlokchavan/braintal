import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import './Login.css'
const Login = () => {
    return (
        <div className='container login'>
            <div className="login__logo">
                {/* <img src="https://testcreative.co.uk/wp-content/uploads/2018/08/logo-mobile.png" alt="braintal logo" /> */}
                {/* <img src="https://avatars0.githubusercontent.com/u/75245774?s=400&u=d25a2c9368d1f7af4a9a772c95e190273869d3cd&v=4" alt="braintal logo" /> */}
                <h1>Braintal</h1>
            </div>

            <div className="login__button">
                <Link to="/demographic">
                    <Button className="login__button--google">
                        Login with Google
                    </Button>
                </Link>
                <p className="login__signUpText">
                    Haven't registered yet ? <strong>Signup</strong>
                </p>
            </div>

        </div>
    )
}

export default Login
