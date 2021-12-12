import React, {useEffect, useState} from "react";
import './profile.css'
import UserLikeList from "../UserLikeList";
import UserFollowList from "../UserFollowList";

const ProfileNonEdit =(props) => {
    const EditingMode = () => {
        props.setIsEdit(true)
    }
    const owner = props.profile;

    return (
        <>
            <div className="row">
                <div className="col-2 mt-4 wd-arrow">
                    <i className="fas fa-arrow-left "/>
                </div>
                <div className="col-10">
                    <div className="fw-bold wd-font-25">{owner.name}</div>
                </div>
            </div>
            <div>
                <button className="mt-2 rounded-pill btn btn-primary override-bs float-end "
                        onClick={() => EditingMode()}>Edit profile</button>
            </div>
            <div className="fw-bolder wd-font-25"> {owner.name}</div>
            <div className="text-secondary">@{owner.handle}</div>
            <div className="mt-3">{owner.bio}</div>
            <div className="mt-2 text-secondary">
                <i className="fas fa-map-marker-alt"/> {owner.location}
                <i className="fas fa-birthday-cake ms-4"/> Born {owner.dateOfBirth}
                <i className="far fa-calendar-alt ms-4"/> Joined {owner.dateJoined}
            </div>
            <div className="mt-2 mb-2">
                <span className="fw-bold wd-white-color"> {owner.followingCount}</span>  Following
                <span className="fw-bold ms-2 wd-white-color "> {owner.followersCount}</span>  Followers
            </div>

            {/*TODO: layout*/}
            <UserLikeList likes={props.likes}/>
            <UserFollowList follows={props.follows}/>
        </>
    )
}
export default ProfileNonEdit;