import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import { findUserById } from "../../../services/user-services";


const OtherProfile = () => {
  // set up
  const params = useParams();
  const profileId = params.profileId;
  const [otherUserProfile, setOtherUserProfile] = useState({});

  // fetch
  const getOtherUserProfile = (profileId) => {
    findUserById(profileId).then(res => res.json())
      .then(user => {
        setOtherUserProfile(user);
      }).catch(() => {
        setOtherUserProfile(null);
      });
  }
  // call once
  useEffect(() => getOtherUserProfile(profileId), []);


  return (
    <div>
      <p>name: {otherUserProfile.name}</p>
      <p>userName: {otherUserProfile.userName}</p>
    </div>
  )
}

export default OtherProfile;