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
    const [follows, setFollows] = useState([]);
    const getProfile = () => {
        getUserProfile().then(res => res.json())
            .then(profile => {
                setProfile(profile);
                getUserLikes(profile.userName).then(likes => setLikes(likes));
                getUserFollows(profile.userName).then(follows => setFollows(follows));
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
                    follows={follows}
                    dispatch
                /> :
                <ProfileNonEdit
                    setIsEdit={setIsEdit}
                    setProfile={setProfile}
                    profile={profile}
                    likes={likes}
                    follows={follows}
                />
            }
        </div>


    )
}

export default Profile;