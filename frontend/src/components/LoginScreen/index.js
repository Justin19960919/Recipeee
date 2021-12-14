import React from "react";
import LoginForm from "./LoginForm";
import Navigation from "../Navigation";
import Footer from "../Footer";
import './login.css';

const LoginScreen = () => {
    return (
        <>
            <Navigation />
            <div className="row mt-10 mb-5 register-screen">
                <div className="col-4">
                </div>
                <div className="col-4">
                    <h4 className="register-title">Login</h4>
                    <h5 className="welcome-wording">Welcome to Recipeee!</h5>
                    <LoginForm />
                </div>
                <div className="col-4">
                </div>
            </div>
            <Footer />
        </>
    )
}

export default LoginScreen;