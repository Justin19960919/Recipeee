import "./navigation.css";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import {API_URL} from "../consts";
import {getUserProfile, logoutUser} from "../../services/user-services";


const Navigation = () => {
  const [user, setUser] = useState(null);
  const getProfile = () => {
    getUserProfile().then(res => res.json())
      .then(user => {
        setUser(user);
      }).catch(() => {
      setUser(null);
    });
  }
  useEffect(getProfile);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-color">
      <div className="container-fluid">
        <a className="navbar-brand logo" href="/">Recipee</a>
        {/*  */}
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarText" type="button" aria-controls="navbarText" aria-expanded="false">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse submenu" id="navbarText">
          <ul className="navbar-nav me-auto mb-lg-0">
            <li className="nav-item">
              <Link to="/recipe-search/ " className="nav-link">
                Search <i class="fa fa-search"></i>
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            {(() => {
              console.log(user);
              if (user !== null) {
                return (
                    <>
                    <li className="nav-item">
                      <Link to="/profile" className="nav-link active" aria-current="page">
                        Profile
                      </Link>
                    </li>
                      <li className="nav-item ">
                        <Link to="/login" onClick={logoutUser} className="nav-link">
                          Logout
                        </Link>
                      </li>
                    </>
                )
              } else {
                return (
                    <>
                      <li className="nav-item">
                        <Link to="/login" className="nav-link">
                          Login
                        </Link>
                      </li>

                      <li className="nav-item ">
                        <Link to="/register" className="nav-link active" aria-current="page">
                          Register
                        </Link>
                      </li>
                    </>
                )
              }
            })()}

          </ul>
          {/* <span className="navbar-text">
            Navbar text with an inline element
          </span> */}

        </div>
      </div>
    </nav>
  );
}


export default Navigation;
