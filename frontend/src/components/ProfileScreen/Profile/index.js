import React, { useEffect, useState } from "react";
import ProfileEdit from "./ProfileEdit";
import ProfileNonEdit from "./ProfileNonEdit";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProfile, getUserFollows, getUserLikes, getUserStars } from "../../../services/ProfileService";
import {useHistory} from "react-router-dom";
import {useNavigate} from "react-router";
import {getUserProfile} from "../../../services/user-services";

const Profile = ({profile, setProfile}) => {
    // const [profile, setProfile] = useState(owner);
    const [isEdit, setIsEdit] = useState(false);
    // const dispatch = useDispatch();

    return (
        <div>
            {isEdit ?
                <ProfileEdit
                    setIsEdit={setIsEdit}
                    setProfile={setProfile}
                    profile={profile}
                    dispatch
                /> :
                <ProfileNonEdit
                    setIsEdit={setIsEdit}
                    setProfile={setProfile}
                    profile={profile}
                />
            }
        </div>


    )
}

export default Profile;