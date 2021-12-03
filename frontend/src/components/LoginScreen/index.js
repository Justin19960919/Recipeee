import React from "react";
import LoginForm from "./LoginForm";

import Navigation from "../Navigation";
import Footer from "../Footer";

const LoginScreen = () => {
    return(
        <>
            <Navigation/>
            <div className="row mt-2">
                <div className="col-4">
                </div>
                <div className="col-4">
                    <LoginForm/>
                </div>
                <div className="col-4">
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default LoginScreen;