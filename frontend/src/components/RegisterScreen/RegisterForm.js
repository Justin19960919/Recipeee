import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

// stylesheets
import "../../index.css";
import "./register.css";

// services
import { registerUser } from "../../services/user-services";

const RegisterForm = () => {
    const [user, setUser] = useState({});
    const history = useHistory();
    const register = () => {
        console.log("clicked register button");
        registerUser(user).then((status) => history.push("/profile"));
    };
    //TODO
    const formValidation = () => { }

    return (
        <>
            <div className="mt-30">
                <input
                    value={user.userName}
                    onChange={(e) => setUser({ ...user, userName: e.target.value })}
                    placeholder="Username"
                    className="form-control"
                    required
                />
            </div>

            <input
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Password"
                type="password"
                className="form-control  mt-4"
                required
            />

            <input
                defaultValue={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="E-mail address"
                className="form-control mt-4 "
                required
            />

            <input
                defaultValue={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                placeholder="First Name"
                className="form-control mt-4 "
                required
            />

            <select
                id="type"
                name="type"
                onChange={(e) => setUser({ ...user, type: e.target.value })}
                className="form-select mt-4 "
            >
                <option value="user">User</option>
                <option value="paiduser">Paid User</option>
                <option value="admin">Admin</option>
            </select>

            <button
                onClick={register}
                className="btn btn-primary override mt-4 register-button"
            >
                Register
            </button>

            <div className="text-secondary mt-4">
                Have an account?{" "}
                <span className="float-end login-link">
                    <Link to="/login" className={`wd-font-color`}>
                        {" "}
                        Login
                    </Link>
                </span>
            </div>
        </>
    );
};

export default RegisterForm;
