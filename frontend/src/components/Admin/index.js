import React, { useState, useEffect } from "react";
import "./index.css";
// services
import { findAllUsers, deleteUser } from "../../services/user-services";
import { findAllReviews } from "../../services/review-services";
// components
import User from "./User";
import Navigation from "../Navigation";
import Footer from "../Footer";



const Admin = () => {

  const [numReviews, setNumReviews] = useState(0);
  const [numUsers, setNumUsers] = useState(0);
  const [allUsers, setAllUsers] = useState([]);

  const getAllReviews = () => {
    findAllReviews()
      .then(allReviews => {
        setNumReviews(allReviews.length);
      })
  }

  const getAllUsers = () => {
    findAllUsers()
      .then(allUsers => {
        setNumUsers(allUsers.length);
        setAllUsers(allUsers);
      })
  }


  useEffect(getAllReviews, []);
  useEffect(getAllUsers, []);

  return (
    <>
      <Navigation />
      <div className="middle">
        <p className="admin-dashboard">Admin Dashboard</p>
        <p className="admin-text">Num reviews: {numReviews}</p>
        <p className="admin-text">Num users: {numUsers}</p>
      </div>
      <div className="useFlex">
        {
          allUsers.map(user =>
            <User
              user={user}
              deleteUser={deleteUser}
              filterUser={setAllUsers}
              key={user._id}
            />
          )
        }
      </div>
      <Footer />
    </>
  );
}


export default Admin;