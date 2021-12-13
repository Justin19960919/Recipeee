import React from "react";
import './profile.css'
import '../../../index.css'

const ProfileNonEdit =(props) => {
    const EditingMode = () => {
        props.setIsEdit(true)
    }
    const owner = props.profile;
    const bannerPicture = "/pic/banner.jpg";
    const profilePicture ="/pic/profile.jpg";

    return (
      <>
          <div className="wd-profile-visual">
              <img className="wd-profile-bannerPic" src={bannerPicture} alt="banner picture"/>
              <img className="wd-profile-img" src={profilePicture} alt="profile picture"/>
              <button className="mt-2 rounded-pill btn btn-primary override-bs float-end"
                      onClick={() => EditingMode()}>Edit profile</button>
          </div>
          <div className="fw-bold wd-font-25">{owner.name}</div>
          <div className="fw-bolder wd-font-25"> {owner.userName}</div>
          <div className="wd-black">{owner.email}</div>
      </>
    )
}
export default ProfileNonEdit;