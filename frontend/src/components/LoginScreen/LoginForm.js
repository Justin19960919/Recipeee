import React from "react";
import {Link} from "react-router-dom";
const LoginForm = () => {

    return(
        <>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="mt-20">
                <input placeholder="Username"
                       className="form-control override-bs "/></div>
            <input placeholder="Password"
                   className="form-control override-bs mt-4"/>

            <button
                className="btn btn-primary override-bs mt-4">
                <Link to = "/profile">
                Sign in</Link>
            </button>
            <div className="text-secondary mt-4">
            <Link to ="/" className={'wd-font-color'}>Forget password? </Link>
                <span className="float-end ">
                <Link to="/register" className={`wd-font-color`} > Sign up</Link></span>
            </div>
        </>
    )
}

export default LoginForm;