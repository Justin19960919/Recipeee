import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";



const RegisterForm = () => {
    const [user, setUser] =useState({});
    const register = () =>
        fetch("https://localhost:4000/api/register",{
            method: 'POST',
            body: JSON.stringify(user),
            headers:{
            'content-type': 'application/json',
            }
        }).then(response => response.json())
            .then(actualUser =>setUser(actualUser));

    return(
        <>
            <br/>
            <br/>
            <br/>
            <br/>
                <div className="mt-20">
                <input onChange={(e)=>setUser({...user,username:e.target.value})}
                       placeholder="Username"
                       className="form-control override-bs"/></div>

                <input onChange={(e)=>setUser({...user,password:e.target.value})}
                    placeholder="Password"
                       className="form-control override-bs mt-4"/>

                <input defaultValue={user.email}
                    placeholder="E-mail address"
                       className="form-control override-bs mt-4 "/>

                <button onClick={register}
                    className="btn btn-primary override-bs mt-4">
                    Sign up
                </button>

            <div className='text-secondary mt-4'>Have an account? <span className="float-end ">
                <Link to="/login" className={`wd-font-color`} > Sign in</Link></span></div>


        </>
    )
}

export default RegisterForm;