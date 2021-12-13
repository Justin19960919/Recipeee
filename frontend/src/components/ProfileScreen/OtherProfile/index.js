import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./index.css";
import { findUserById, getUserProfile } from "../../../services/user-services";
import { getUserFollows, getUserLikes } from "../../../services/ProfileService";
import Navigation from "../../Navigation";
import FollowList from "../../FollowList";
import LikeList from "../../LikeList";


const OtherProfile = () => {
  const bannerPicture = "/pic/banner.jpg";
  const profilePicture = "/pic/profile.jpg";

  // set up
  const params = useParams();
  const profileId = params.profileId;
  const [otherUserProfile, setOtherUserProfile] = useState({});
  const [likes, setLikes] = useState([]);
  const [follows, setFollows] = useState([]);

  // fetch
  const getOtherUserProfile = (profileId) => {
    findUserById(profileId).then(res => res.json())
      .then(user => {
        setOtherUserProfile(user);
        getUserLikes(user.userName).then(likes => setLikes(likes));
        getUserFollows(user.userName).then(follows => setFollows(follows));
      }).catch(() => {
        setOtherUserProfile(null);
      });
  }
  // call once
  useEffect(() => getOtherUserProfile(profileId), []);

  const history = useHistory();
  const [user, setUser] = useState({});
  const getUser = () => {
    getUserProfile().then(res => res.json())
      .then(user => {
        setUser(user);
      }).catch(() => {
        history.push("/login");
      });
  }
  useEffect(getUser, [history]);

  return (
    <>
      <Navigation />
      <div className="row mt-2">
        <div className="col-3">
          <FollowList follows={follows} />
        </div>

        <div className="col-6"
          style={{ "position": "relative" }}>
          <div>
            <div className="wd-profile-visual">
              <img className="wd-profile-bannerPic" src={bannerPicture} alt="banner picture" />
              <img className="wd-profile-img" src={profilePicture} alt="profile picture" />
            </div>

            {user.type === "admin" && <div className="fw-bold wd-font-25">First Name : {otherUserProfile.name}</div>}
            <div className="fw-bolder wd-font-25">UserName : {otherUserProfile.userName}</div>
            {user.type === "admin" && <div className="wd-black">Email : {otherUserProfile.email}</div>}
          </div>
        </div>

        <div className="col-3">
          <LikeList likes={likes} />
        </div>
      </div>
    </>
  )
}

export default OtherProfile;