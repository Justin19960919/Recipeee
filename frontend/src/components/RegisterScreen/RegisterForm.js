import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import '../../index.css'
import './register.css'
import {API_URL} from "../consts";

const RegisterForm = () => {
    const [user, setUser] =useState({});
    const history= useHistory();
    const register = () =>
        fetch(`${API_URL}/register`,{
            method: 'POST',
            body: JSON.stringify(user),
            headers:{
            'content-type': 'application/json',
            }
        }).then(status => history.push('/profile'));

    return(
        <>
                <div className="mt-30">
                <input
                    value={user.username}
                    onChange={(e)=>setUser({...user,username:e.target.value})}
                       placeholder="Username"
                       className="form-control"/></div>

                <input
                    value={user.password}
                    onChange={(e)=>setUser({...user,password:e.target.value})}
                    placeholder="Password"
                    type="password"
                       className="form-control  mt-4"/>

                <input defaultValue={user.email}
                    placeholder="E-mail address"
                       className="form-control mt-4 "/>

                <button onClick={register}
                    className="btn btn-primary override mt-4 register-button">
                    Register
                </button>

            <div className='text-secondary mt-4'>Have an account? <span className="float-end login-link">
                <Link to="/login" className={`wd-font-color`} > Login</Link></span></div>


        </>
    )
}

export default RegisterForm;