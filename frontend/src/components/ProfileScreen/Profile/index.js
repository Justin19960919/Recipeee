import React, { useEffect, useState } from "react";
import ProfileEdit from "./ProfileEdit";
import ProfileNonEdit from "./ProfileNonEdit";
import { useSelector } from "react-redux";
import { getCurrentProfile, getUserFollows, getUserLikes, getUserStars } from "../../../services/ProfileService";
import {useHistory} from "react-router-dom";
import {useNavigate} from "react-router";
import {getUserProfile} from "../../../services/user-services";

const Profile = () => {
    const owner = useSelector((state) => state.profile)
    // const [profile, setProfile] = useState(owner);
    const [isEdit, setIsEdit] = useState(false);

    const history = useHistory();
    const [profile, setProfile] = useState(owner);
    const [likes, setLikes] = useState([]);
    const getProfile = () => {
        getUserProfile().then(res => res.json())
            .then(profile => {
                setProfile(profile);
                getUserLikes(profile.userName).then(likes => setLikes(likes));
            }).catch(() => {
                history.goBack();
            });
    }
    useEffect(getProfile, [history]);

    return (
        <div>
            {isEdit ?
                <ProfileEdit
                    setIsEdit={setIsEdit}
                    setProfile={setProfile}
                    profile={profile}
                    likes={likes}
                    dispatch
                /> :
                <ProfileNonEdit
                    setIsEdit={setIsEdit}
                    setProfile={setProfile}
                    profile={profile}
                    likes={likes}
                />
            }
        </div>


    )
}

export default Profile;