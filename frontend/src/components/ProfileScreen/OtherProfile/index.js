import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./index.css";
import { findUserById } from "../../../services/user-services";

const OtherProfile = ({ profileId }) => {
  const history = useHistory();
  const [otherUserProfile, setOtherUserProfile] = useState({});

  const getOtherUserProfile = (profileId) => {
    findUserById(profileId).then(res => res.json())
      .then(user => {
        setOtherUserProfile(user);
      }).catch(() => {
        setOtherUserProfile(null);
      });
  }
  useEffect(() => getOtherUserProfile(profileId), []);

  if (otherUserProfile._id === profileId) {
    // visiting myself, go to profile page
    history.push("/profile");
  }

  return (
    <div>
      Other User profile has userId: {profileId}
      {JSON.stringify(otherUserProfile)}
    </div>
  )
}

export default OtherProfile;