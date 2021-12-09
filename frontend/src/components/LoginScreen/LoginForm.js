import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import '../../index.css';
import './login.css'
import { API_URL } from "../consts";
const LoginForm = () => {
    const [user, setUser] = useState({});
    const history = useHistory();
    const login = () => {
        fetch(`${API_URL}/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(status => {
            history.push('/profile')
        });
    }
    return (
        <>
            <div className="mt-20">
                <input
                    value={user.userName}
                    onChange={(e) => setUser({ ...user, userName: e.target.value })}
                    placeholder="Username"
                    className="form-control " /></div>
            <input
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Password"
                type="password"
                className="form-control mt-4" />

            <button
                className="btn btn-primary override mt-4 register-button"
                onClick={login}>
                Login
            </button>
            <div className="text-secondary mt-4 login-link">
                <Link to="/" className={'wd-font-color'}>Forget password? </Link>
                <span className="float-end login-link">
                    <Link to="/register" className={`wd-font-color`} > Register</Link></span>
            </div>
        </>
    )
}

export default LoginForm;