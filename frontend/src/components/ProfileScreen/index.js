import React, {useEffect, useState} from "react";
import Navigation from "../Navigation";
import Profile from "./Profile";
import FollowList from "../FollowList";
import LikeList from "../LikeList";
import {useHistory} from "react-router-dom";
import {getUserProfile} from "../../services/user-services";
import {useSelector} from "react-redux";
import {getUserFollows, getUserLikes} from "../../services/ProfileService";


const ProfileScreen = () => {
    const owner = useSelector((state) => state.profile)
    const [likes, setLikes] = useState([]);
    const [follows, setFollows] = useState([]);

    const history = useHistory();
    const [profile, setProfile] = useState(owner);
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
        <>
            <Navigation />
            <div className="row mt-2">
                <div className="col-3">
                    <FollowList follows={follows}/>
                </div>
                <div className="col-6"
                     style={{"position": "relative"}}>
                    <Profile
                        setProfile={setProfile}
                        profile={profile}
                    />
                </div>
                <div className="col-3">
                    <LikeList likes={likes}/>
                </div>
            </div>
        </>
    );
};
export default ProfileScreen;
