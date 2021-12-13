import React from "react";
import "./index.css";

const User = ({ user, deleteUser, filterUser }) => {
  const deleteAction = () => {
    console.log("Deleting user from system");
    // delete user from db
    deleteUser(user._id);
    // filterUser
    filterUser(prevState => prevState.filter(otherUser => otherUser._id !== user._id));
  }

  return (
    <div className="user-card">
      <i
        className="fas fa-times fa-pull-right"
        onClick={deleteAction}
      >
      </i>
      {/* <p>{user._id}</p> */}
      <p>username: {user.userName}</p>
      <p>type: {user.type}</p>
      <p>name: {user.name}</p>
      <p>email: {user.email}</p>
    </div>
  );
}


export default User;